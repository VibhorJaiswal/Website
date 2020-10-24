// @ts-nocheck
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, { duration: 300 });
  
//   change
  
  console.log("connected");


    if (window.innerWidth < 800) {
        let temp = document.querySelectorAll('#card');
        for (let i = 0; i < 4; i++) {
            temp[i].setAttribute("class", "row card");
            temp[i].id = "";
        }
    }

  
  //comment

// materialize

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, { duration: 300 });
});

//   change

  let app = new Vue({
    el: '#app',
    data: {
      submissionsData: [
        {
          projectName: 'HALWAPURI',
          backgroundImage:
            'https://lh4.googleusercontent.com/-XplyTa1Za-I/VMSgIyAYkHI/AAAAAAAADxM/oL-rD6VP4ts/w1184-h666/Android-Lollipop-wallpapers-Google-Now-Wallpaper-2.png',
          sourceCodeLink: 'https://github.com/VibhorJaiswal/Website',
          description:
            '  Project k baare M Sanchept m Jankaari.Project k baare M Sanchept m\
          Jankaari.Project k baare M Sanchept m Jankaari.Project k baare M\
          Sanchept m Jankaari.Project k baare M Sanchept m Jankaari.Project k\
          baare M Sanchept m Jankaari.Project k baare M Sanchept m\
          Jankaari.Project k baare M Sanchept m Jankaari.Project k baare M\
          Sanchept m Jankaari.Project k baare M Sanchept m Jankaari.Project k\
          baare M Sanchept m Jankaari.Project k baare M Sanchept m\
          Jankaari.Project k baare M Sanchept m Jankaari.Project k baare M\
          Sanchept m Jankaari.Project k baare M Sanchept m Jankaari.Project k\
          baare M Sanchept m Jankaari.Project k baare M Sanchept m\
          Jankaari.Project k baare M Sanchept m Jankaari.Project k baare M\
          Sanchept m Jankaari.Project k baare M Sanchept m Jankaari. Project k\
          baare M Sanchept m Jankaari.Project k baare M Sanchept m\
          Jankaari.Project k baare M Sanchept m Jankaari.Project k baare M\
          Sanchept m Jankaari.Project k baare M Sanchept m Jankaari.Project k\
          baare M Sanchept m Jankaari.Project k baare M Sanchept m\
          Jankaari.Project k baare M Sanchept m Jankaari.Project k baare M\
          Sanchept m Jankaari.Project k baare M Sanchept m Jankaari.Project k\
          baare M Sanchept m Jankaari.Project k baare M Sanchept m\
          Jankaari.Project k baare M Sanchept m Jankaari.Project k baare M\
          Sanchept m Jankaari.Project k baare M Sanchept m Jankaari.Project k\
          baare M Sanchept m Jankaari. Project k baare M Sanchept m Jankaari.',
        },
      ],
    },
  });
});
