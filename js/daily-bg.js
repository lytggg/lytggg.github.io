// 每日背景图片轮换脚本
// 将此代码添加到主题的自定义JS文件中

(function() {
    // 背景图片列表（请根据实际路径修改）
    const backgrounds = [
        '/images/lyt1.jpg',
        '/images/lyt2.jpg', 
        '/images/lyt3.jpg'
    ];
    
    // 获取今天是一年中的第几天
    function getDayOfYear() {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    }
    
    // 根据日期选择背景图片
    function setDailyBackground() {
        const dayOfYear = getDayOfYear();
        const bgIndex = dayOfYear % backgrounds.length;
        const selectedBg = backgrounds[bgIndex];
        
        // 查找封面背景元素并更换背景
        const coverElement = document.querySelector('.cover');
        if (coverElement) {
            coverElement.style.backgroundImage = `url('${selectedBg}')`;
            console.log(`今日背景: ${selectedBg} (第${dayOfYear}天)`);
        }
    }
    
    // 页面加载完成后执行
    document.addEventListener('DOMContentLoaded', setDailyBackground);
    
    // 如果支持PJAX，在PJAX完成后也执行
    if (typeof volantis !== 'undefined') {
        document.addEventListener('pjax:complete', setDailyBackground);
    }
})();