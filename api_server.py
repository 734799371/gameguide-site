#!/usr/bin/env python3
"""
Face Swap API Server
使用 gradio_client 库调用 HuggingFace Spaces API
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import base64
import tempfile
import os
from gradio_client import Client, handle_file
import logging

app = Flask(__name__)
CORS(app)  # 允许跨域请求

# 配置日志
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# 初始化 Gradio 客户端
try:
    client = Client("SS86910/Faceswaper")
    logger.info("✅ Gradio client initialized successfully")
except Exception as e:
    logger.error(f"❌ Failed to initialize Gradio client: {e}")
    client = None


@app.route('/health', methods=['GET'])
def health_check():
    """健康检查端点"""
    return jsonify({
        'status': 'healthy',
        'gradio_client': 'ready' if client else 'error'
    })


@app.route('/api/faceswap', methods=['POST'])
def faceswap():
    """
    人脸互换 API
    接收 base64 编码的图片，返回处理后的图片
    """
    if not client:
        return jsonify({'error': 'Gradio client not initialized'}), 500
    
    try:
        data = request.json
        
        # 获取参数
        source_b64 = data.get('source_image')
        target_b64 = data.get('target_image')
        enhance_face = data.get('enhance_face', True)
        
        if not source_b64 or not target_b64:
            return jsonify({'error': 'Missing source_image or target_image'}), 400
        
        # 解码 base64 图片
        source_bytes = base64.b64decode(source_b64.split(',')[1] if ',' in source_b64 else source_b64)
        target_bytes = base64.b64decode(target_b64.split(',')[1] if ',' in target_b64 else target_b64)
        
        # 保存临时文件
        with tempfile.NamedTemporaryFile(delete=False, suffix='.png') as source_file:
            source_file.write(source_bytes)
            source_path = source_file.name
        
        with tempfile.NamedTemporaryFile(delete=False, suffix='.png') as target_file:
            target_file.write(target_bytes)
            target_path = target_file.name
        
        logger.info(f"📁 Temp files created: {source_path}, {target_path}")
        
        # 调用 Gradio API
        try:
            result = client.predict(
                source_image_path=handle_file(source_path),
                target_image_path=handle_file(target_path),
                enhance_face=enhance_face,
                api_name="/predict"
            )
            logger.info(f"✅ Gradio API result: {result}")
            
            # 读取结果图片
            if result and os.path.exists(result):
                with open(result, 'rb') as f:
                    result_bytes = f.read()
                result_b64 = base64.b64encode(result_bytes).decode('utf-8')
                result_b64 = f'data:image/png;base64,{result_b64}'
                
                # 清理临时文件
                os.unlink(source_path)
                os.unlink(target_path)
                if os.path.exists(result):
                    os.unlink(result)
                
                return jsonify({
                    'success': True,
                    'result_image': result_b64
                })
            else:
                return jsonify({'error': 'No result returned from Gradio API'}), 500
                
        except Exception as e:
            logger.error(f"❌ Gradio API error: {e}")
            # 清理临时文件
            if os.path.exists(source_path):
                os.unlink(source_path)
            if os.path.exists(target_path):
                os.unlink(target_path)
            return jsonify({'error': f'Gradio API error: {str(e)}'}), 500
            
    except Exception as e:
        logger.error(f"❌ Server error: {e}")
        return jsonify({'error': f'Server error: {str(e)}'}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
