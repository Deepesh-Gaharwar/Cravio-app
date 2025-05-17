// named exports

export const LOGO_URL = "https://i.pinimg.com/474x/1c/f7/78/1cf77884ef836c0c792970a1467533ca.jpg"; 

export const API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7405739&lng=77.1228086&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/";

export const MENU_API_URL = (resId) =>
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7405739&lng=77.1228086&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

export const GIT_HUB_API_URL = "https://api.github.com/users/";

export const IMAGE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/" ;