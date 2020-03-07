// Changing element with onclick, Reference: https://www.w3schools.com/jsref/met_document_getelementbyid.asp

//Navigation Bar (Desktop)
//To switch the image when the cursor hovers the cart icon
function navCartHover(){
	document.getElementById("menu-cart-img").src = "sources/cart-hover.png";
}

//To switch the image when the cursor leaves the cart icon
function navCartNormal(){
	document.getElementById("menu-cart-img").src = "sources/cart-white.png";
}

//To switch the image when the cursor leaves the cart icon
function navCartNormalGen(){
	document.getElementById("menu-cart-img").src = "sources/cart-black.png";
}

//Navigation Bar (Mobile)
//Functions triggered by expanding the condensed navigation bar
function navExpand() {
	//Expand the condensed navigation bar
	document.getElementById("navMobileExpand").style.visibility = "visible";
	document.getElementById("navMobileExpand").style.opacity = "1";
	document.getElementById("navMobileExpand").style.backgroundColor = "white";
	document.getElementById("navMobileExpand").style.height = "auto";

	//Changes the button of "MENU" to "CLOSE"
	//Make the word "MENU" to become invisible
	document.getElementById("nav-mobile-menu-open").style.display = "none";

	//Make the word "CLOSE" to become visible
	document.getElementById("nav-mobile-menu-close").style.display = "block";
	document.getElementById("nav-mobile-menu-close").style.color = "black";

	//Changes the elements on navigation bar to black color
	document.getElementById("menu-cart-mobile").style.color = "black";
	document.getElementById("menu-cart-img-mobile").src = "sources/cart-black.png";
	document.getElementById("nav-logo-mobile").src = "sources/logo.png";

	//Changes the entire condensed navigation bar into white with slight animation
	document.getElementById("nav-mobile").style.backgroundColor = "white";
	document.getElementById("nav-mobile").style.transition = "all 0.2s linear";
}

//Functions triggered by closing the navigation bar
function navClose() {
	//Closing the condensed navigation bar
	document.getElementById("navMobileExpand").style.visibility = "hidden";
	document.getElementById("navMobileExpand").style.opacity = "0";
	document.getElementById("navMobileExpand").style.height = "0";

	//Changes the button of "CLOSE" to "MENU"
	//Make the word "MENU" to become visible 
	document.getElementById("nav-mobile-menu-open").style.display = "block";
	//Make the word "CLOSE" to become invisible
	document.getElementById("nav-mobile-menu-close").style.display = "none";

	//Condensed categories from SHOP
	//Closing all the expanded categories from SHOP
	document.getElementById("nav-dropdown-shop-link-tent").style.visibility = "hidden";
	document.getElementById("nav-dropdown-shop-link-tent").style.opacity= "0";
	document.getElementById("nav-dropdown-shop-link-tent").style.padding= "0";
	document.getElementById("nav-dropdown-shop-link-tent").style.height= "0";
	document.getElementById("nav-dropdown-shop-link-cookware").style.visibility = "hidden";
	document.getElementById("nav-dropdown-shop-link-cookware").style.opacity= "0";
	document.getElementById("nav-dropdown-shop-link-cookware").style.padding= "0";
	document.getElementById("nav-dropdown-shop-link-cookware").style.height= "0";

	//Changing the elements on navigation bar back to white
	document.getElementById("menu-cart-mobile").style.color = "white";
	document.getElementById("menu-cart-img-mobile").src = "sources/cart-white.png";
	document.getElementById("nav-logo-mobile").src = "sources/logo-white.png";

	//Changing the navigation bar back to transparent
	document.getElementById("nav-mobile").style.backgroundColor = "transparent";
	document.getElementById("nav-mobile").style.transition = "all 0.2s linear";
}

//Functions triggered by expanding the categories from SHOP
function shopExpand(){
	//Making the categories from SHOP to become visible
	document.getElementById("nav-dropdown-shop-link-tent").style.visibility = "visible";
	document.getElementById("nav-dropdown-shop-link-tent").style.opacity= "1";
	document.getElementById("nav-dropdown-shop-link-tent").style.padding= "1rem";
	document.getElementById("nav-dropdown-shop-link-tent").style.height= "auto";
	document.getElementById("nav-dropdown-shop-link-cookware").style.visibility = "visible";
	document.getElementById("nav-dropdown-shop-link-cookware").style.opacity= "1";
	document.getElementById("nav-dropdown-shop-link-cookware").style.padding= "1rem";
	document.getElementById("nav-dropdown-shop-link-cookware").style.height= "auto";
}

// ;(function(){
//     $(document).ready(function() {
//         $( '.nav-mobile-menu-open' ).active(
//             function(){
//                 $('.nav-mobile-expand').slideDown(200);
//                 $('.nav-mobile-expand').style.display = "flex";
//             },
//             function(){
//                 $(this).children('.nav-mobile-expand').slideUp(200);
//             }
//         );
//     });
// })();