document.addEventListener('DOMContentLoaded', function(){
      link=document.createElement('link');
      link.href='manifest.webmanifest';
      link.rel='manifest';

      document.getElementsByTagName('head')[0].appendChild(link);
  });
