import { browser } from "$app/environment";
import type { Readable } from "svelte/motion";
import { derived, writable, type Writable } from "svelte/store";

export type LayoutStoreData  ={
    isDropDownMenuShowing: boolean;
    IsDarkTheme: boolean;
}
export type ReadableLayoutStore = Readable<{
    isDropDownMenuShowing: boolean;
    IsDarkTheme: boolean;
}>
export let layoutStore = writable<LayoutStoreData>({
    isDropDownMenuShowing: false,
    IsDarkTheme: false,
});
export let readOnlyLayoutStore = derived(layoutStore, ($layoutStore) => {
    return $layoutStore;
});
export function toggleNav(){
    let body = document.getElementsByClassName("dropDownNavContainer");


    layoutStore.update((store) => {
         //@ts-ignore
         if(store.isDropDownMenuShowing){
            hideNav()
         }else{
             showNav()
         }
     
        return { ...store, isDropDownMenuShowing: !store.isDropDownMenuShowing }
    })
}
export function showNav(){
    let body = document.getElementsByClassName("dropDownNavContainer");
    if(body.length >0){
        body[0].classList.remove("hideDropDownNav");
        body[0].classList.add("showDropDownNav");
    }
}
export function hideNav(){
    let body = document.getElementsByClassName("dropDownNavContainer");
    if(body.length >0){
        body[0].classList.remove("showDropDownNav");
        body[0].classList.add("hideDropDownNav");
    }
}

if(browser){
    // listen for theme change
		window.addEventListener('themeChange', (e:any) => {
		});
	}
export let toggleTheme = () => {
    // dispatch event for theme change
    dispatchEvent(new CustomEvent('themeChange',  { detail: { IsDarkTheme: "hello" } }));
    layoutStore.update((store) => {
        let body = document.getElementsByTagName("body");
        if(!store.IsDarkTheme){
            body[0].classList.add("dark");
        }else{
            body[0].classList.remove("dark");
        }
        return { ...store, IsDarkTheme: !store.IsDarkTheme }
    })
}
