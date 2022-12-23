
function openInNewTab(url) {
 window.open(url, '_self').focus();
}



$(".container-bgA").click(
  function(){
      $(this).css("display","none");
      $(".container-bgA-blank").css("display","inline-block");
      console.log("已經點擊");
  }
)


$(".container-bgB").click(
  function(){
      $(this).css("display","none");
      $(".container-bgB-blank").css("display","inline-block");
  }
)


$(".container-bgC").click(
  function(){
      $(this).css("display","none");
      $(".container-bgC-blank").css("display","inline-block");
  }
)

$(".element").click(
  function(){
    $(".hambur_option").css("display","inline");
  }
)

  // 按換下一件loop就要打開，再打開相機時就可以




// $(".hambur").click(
//   function(){
//     $(".hambur_option").css("display","inline");
//   }
// )


// $(".hambur_cancel ").click(
//   function(){
//     $(".hambur_option").css("display","none");
//   }
// )

// $(".top_option").click(
//   function(){
//     $(".hambur_option_orig").attr('src', 'https://i.imgur.com/Xl8vQxS.png');
//   }
// )


// $(".bottom_option").click(
//   function(){
//     $(".hambur_option_orig").attr('src', 'https://i.imgur.com/Z0QnFaS.png');
//   }
// )

// setTimeout(
//   function(){
//     $(".scan").addClass("ani_fadein");
//   }
//   ,0);

// setTimeout(
//   function(){
//     $(".scan").removeClass("ani_fadein");
//   },500);


// // 動作教學看完按確認
// $(".scan_btn").click(
//   function(){
//     $(".scan").addClass("ani_fadeout");
    
//     setTimeout(function(){
//       $(".scan_ready").css("display","inline-block");
//       $(".scan").css("display","none");
//     }, 1000);
//    });
   
// $(".gtf_btn_cloth1").click(
//   function(){
//     $(".cloth_scenario").css("display","inline-block");
//     $(".gtf_FB").css("display","none");
//     $(".gtf_btn_cloth1").css("display","none");
//     $(".cloth1").css("display","none");
//     $(".container-bg").css("display","none");
//     $(".container-bg2").css("display","inline-block");
//     setTimeout(function(){
//       $(".scen1").css("display","inline-block");
//       $(".dia1").css("display","inline-block");
//       $(".cloth1_intro").css("display","inline-block");
//     }, 500);
//     setTimeout(function(){
//       $(".scen_FB").css("display","inline-block");
//       $(".scen_yes_btn_code").css("display","inline-block");
//       $(".scen_again_btn").css("display","inline-block");
//     }, 3000);
//   });
  

//   $(".gtf_btn_cloth2").click(
//     function(){
//       $(".cloth_scenario").css("display","inline-block");
//       $(".gtf_FB").css("display","none");
//       $(".gtf_btn_cloth2").css("display","none");
//       $(".cloth2").css("display","none");
//       $(".container-bg").css("display","none");
//       $(".container-bg2").css("display","inline-block");
//       setTimeout(function(){
//         $(".scen2").css("display","inline-block");
//         $(".dia2").css("display","inline-block");
//         $(".cloth2_intro").css("display","inline-block");
//       }, 500);
//       setTimeout(function(){
//         $(".scen_FB").css("display","inline-block");
//         $(".scen_yes_btn_normal2").css("display","inline-block");
//         $(".scen_again_btn").css("display","inline-block");
//       }, 3000);
//     });

//     $(".gtf_btn_cloth3").click(
//       function(){
//         $(".cloth_scenario").css("display","inline-block");
//         $(".gtf_FB").css("display","none");
//         $(".gtf_btn_cloth3").css("display","none");
//         $(".cloth3").css("display","none");
//         $(".container-bg").css("display","none");
//         $(".container-bg2").css("display","inline-block");
//         setTimeout(function(){
//           $(".scen3").css("display","inline-block");
//           $(".dia3").css("display","inline-block");
//           $(".cloth3_intro").css("display","inline-block");
//         }, 500);
//         setTimeout(function(){
//           $(".scen_FB").css("display","inline-block");
//           $(".scen_yes_btn_code").css("display","inline-block");
//           $(".scen_again_btn").css("display","inline-block");
//         }, 3000);
//       });



// $(".scen_yes_btn_normal2").click(
//   function(){
//     video.loop();
//     $(".customer_end").css("z-index","10");
//     $(".cloth_scenario").css("display","none");
//     $(".scen2").css("display","none");
//     $(".dia2").css("display","none");
//     $(".cloth2_intro").css("display","none");
//     $(".scen_yes_btn_normal2").css("display","none");
//     $(".customer_thank2").css("display","inline-block");
//     $(".next_normal").css("display","inline-block");
    
//   }
// );


// $(".scen_yes_btn_normal3").click(
//   function(){
//     video.loop();
//     $(".customer_end").css("z-index","10");
//     $(".cloth_scenario").css("display","none");
//     $(".scen3").css("display","none");
//     $(".dia3").css("display","none");
//     $(".cloth3_intro").css("display","none");
//     $(".scen_yes_btn_normal3").css("display","none");
//     $(".customer_thank3").css("display","inline-block");
//     $(".next_normal").css("display","inline-block");
    
//   }
// );
// $(".next_normal").click(function(){
//   $(".next_normal").css("display","none");
//   $(".customer_thank2").css("display","none");
//   $(".customer_thank3").css("display","none");
//   $(".end_btn").css("display","inline-block");
//  });

//  $(".scen_yes_btn_code").click(
//   function(){
//     video.loop();
//     $(".customer_end").css("z-index","10");
//     $(".cloth_scenario").css("display","none");
//     $(".scen3").css("display","none");
//     $(".dia3").css("display","inline-block");
//     $(".cloth3_intro").css("display","none");
//     $(".scen_yes_btn_code").css("display","none");
//     $(".customer_thank3").css("display","inline-block");
//     $(".next_code").css("display","inline-block");    
//   }
// );

// // 為什麼密碼會不見？
// $(".next_code").click(function(){
//   $(".next_code").css("display","none");
//   $(".gotcode").css("display","inline-block");
//   $(".customer_thank3").css("display","none");
//  });


// $(".check_code").click(function(){
//   $(".gotcode").css("display","none");
//   $(".end_btn").css("display","inline-block");
//  });
      
  
//  $(".playagain").click(
//   function(){
//     $(".container-bg").prop("src","https://i.imgur.com/nPEqf2x.png");
//     $(".end_btn").css("display","none");
//     setTimeout(function(){
//       $(".scan_ready").css("display","inline-block");
//       $(".cloth").css("display","inline-block");
//       $(".scen1").css("display","none");
//       $(".scen2").css("display","none");
//       $(".scen3").css("display","none");
//       $(".dia1").css("display","none");
//       $(".dia2").css("display","none");
//       $(".dia3").css("display","none");
//       $(".cloth1_intro").css("display","none");
//       $(".cloth2_intro").css("display","none");
//       $(".cloth3_intro").css("display","none");
//       $(".customer_thank1").css("display","none");
//       $(".customer_thank2").css("display","none");
//       $(".customer_thank3").css("display","none");
//       $(".container-bg2").css("display","none");
//       $(".container-bg").css("display","inline-block");
//       $(".cloth_scenario").css("display","none");
//       $(".next_normal").css("display","none");
//       $(".next_code").css("display","none");
//       $(".scen_FB").css("display","none");
//       $(".scen_yes_btn_code").css("display","none");
//       $(".scen_again_btn").css("display","none");
//       $(".scen_yes_btn_normal2").css("display","none");
//       $(".scen_yes_btn_normal3").css("display","none");
//     }, 500);
// });


// $(".scen_again_btn").click(
//   function(){
//     $(".container-bg").prop("src","https://i.imgur.com/nPEqf2x.png");
//     $(".end_btn").css("display","none");
//     setTimeout(function(){
//       $(".scan_ready").css("display","inline-block");
//       $(".cloth").css("display","inline-block");
//       $(".scen1").css("display","none");
//       $(".dia1").css("display","none");
//       $(".scen2").css("display","none");
//       $(".scen3").css("display","none");
//       $(".dia1").css("display","none");
//       $(".dia2").css("display","none");
//       $(".dia3").css("display","none");
//       $(".cloth1_intro").css("display","none");
//       $(".cloth2_intro").css("display","none");
//       $(".cloth3_intro").css("display","none");
//       $(".customer_thank1").css("display","none");
//       $(".customer_thank2").css("display","none");
//       $(".customer_thank3").css("display","none");
//       $(".container-bg2").css("display","none");
//       $(".container-bg").css("display","inline-block");
//       $(".cloth_scenario").css("display","none");
//       $(".next_normal").css("display","none");
//       $(".next_code").css("display","none");
//       $(".scen_FB").css("display","none");
//       $(".scen_yes_btn_code").css("display","none");
//       $(".scen_again_btn").css("display","none");
//       $(".scen_yes_btn_normal2").css("display","none");
//       $(".scen_yes_btn_normal3").css("display","none");
//     }, 500);
// });
