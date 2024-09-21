var posts=["2024/08/25/My-New-Post/","2024/08/23/hello-world/","2024/08/25/这是一篇新的博文/","2024/09/21/外星人入侵/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };