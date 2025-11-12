
//Flip//
      $(function(){
        prettyPrint();
        
        $(".card-grid").flip({
          trigger: 'hover'
        });

        $("#card-1").flip();

        $("#card-2").flip({
          axis: 'x',
          trigger: 'hover'
        });

        $("#card-3").flip({
          axis: 'x',
          trigger: 'hover',
          reverse: true
        });

        $("#card-4").flip({
          trigger: 'manual'
        });

        $("#flip-btn").click(function(){
          $("#card-4").flip(true);
        });

        $("#unflip-btn").click(function(){
          $("#card-4").flip(false);
        });

        $("#toggle-btn").click(function(){
          $("#card-4").flip('toggle');
        });
    
        $("#card-5").flip({
          axis: 'y',
          trigger: 'click'
        });
        $("#axis-x-btn").click(function(){
          $("#card-5").flip({axis: 'x'});
        });
        $("#axis-y-btn").click(function(){
          $("#card-5").flip({axis: 'y'});
        });
        $("#reverse-true-btn").click(function(){
          $("#card-5").flip({reverse: true});
        });
        $("#reverse-false-btn").click(function(){
          $("#card-5").flip({reverse: false});
        });
        $("#card-6").flip({
          trigger: 'click'
        });
        $('#assign-done').click(function(){
          $("#card-6").on('flip:done',function(){
            $(this).fadeOut(400,function(){
              $(this).fadeIn();
            });
          });
        });
        $("#card-7").flip({
          trigger: 'click'
        });
        $('#assign-change').click(function(){
          $("#card-7").on('flip:change',function(){
            $(this).flip('toggle');
          });
        });
        var not = function(axis){
            if (axis == 'x'){
             return 'y';
            }else{
                return 'x';
            }
        }
        var c7_nextAxis = 'y';
        $('#toggleaxis').click(function(){
          c7_nextAxis = not(c7_nextAxis);
          $('.card').flip({axis: c7_nextAxis});
        });
        $("#card-fluid").flip({
          axis: 'y',
          trigger: 'click',
      forceWidth: false,
      forceHeight: false
        }).find('.front, .back').css({
      'width': '100%',
      'height': '100%'
    });
      });
    //  / /    ///

    