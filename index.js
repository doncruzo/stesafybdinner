

    $("#features").hide();
    $("#pricing").hide();
    $("#testimonials").hide();
    $("#cta").hide();

    $("#goat").on("click",function(){
      $("#testimonials").toggle("slow","swing");
      $("#testimonials");
      
    });

  $("#feat").on("click",function(){
    $("#features").toggle("slow","swing");
    $("#features");
    
  });
  $("#tobi").on("click",function(){
    $("#features").toggle("slow","swing");
    $("#features");
    
  });
  $("#cow").on("click",function(){
    $("#pricing").toggle("slow","swing");
    $("#pricing");
    
  });

  $("#toby").on("click",function(){
    $("#testimonials");
    $("#press").show();
    
  });


  // $("features").slow();
