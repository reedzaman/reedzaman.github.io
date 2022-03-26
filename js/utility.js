export default function toggle(){
    let nav = document.getElementById("NAV_MENU");
    let btn = document.getElementsByClassName("navigation_button")[0];

    if(nav.style.display == "none"){
        $("#NAV_MENU").fadeIn();
        $("#BTN").animate(
                    {'opacity' : 0}, 300,() => {
                        $("#BTN").html("close");
                        $("#BTN").animate({'opacity' : 1}, 200);
                    }
                );
    } else {
        $("#NAV_MENU").fadeOut();
        $("#BTN").animate(
                    {'opacity' : 0}, 300,() => {
                        $("#BTN").html("menu");
                        $("#BTN").animate({'opacity' : 1}, 200);
                    }
                );
    }
}
