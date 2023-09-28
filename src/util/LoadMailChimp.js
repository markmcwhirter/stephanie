const LoadMailChimp = (callback) => {
    const existingScript = document.getElementById('mailChimp');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = '<script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/e64a2ef7be14c7caa7604f49b/104353a7d33dc39eee1708d8a.js");</script>';
      script.id = 'mailChimp';
      document.body.appendChild(script);
      script.onload = () => { 
        if (callback) callback();
      };
    }
    if (existingScript && callback) callback();
  };
  export default LoadMailChimp;