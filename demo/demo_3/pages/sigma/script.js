function click1(){
    document.getElementById("overview").classList.add("pa");
    document.getElementById("overview").classList.remove("pna");
    
    document.getElementById("story").classList.add("pna");
    document.getElementById("story").classList.remove("pa");
    
    document.getElementById("overview-tab").classList.add("show");
    document.getElementById("overview-tab").classList.add("hero-view");
    document.getElementById("overview-tab").classList.remove("hidden");
    
    document.getElementById("story-tab").classList.add("hidden");
    document.getElementById("story-tab").classList.remove("show");
    document.getElementById("story-tab").classList.remove("hero-story");
}
function click2(){
    document.getElementById("overview").classList.add("pna");
    document.getElementById("overview").classList.remove("pa");
    
    document.getElementById("story").classList.add("pa");
    document.getElementById("story").classList.remove("pna");
    
    document.getElementById("overview-tab").classList.add("hidden");
    document.getElementById("overview-tab").classList.remove("show");
    document.getElementById("overview-tab").classList.remove("hero-view");
    
    document.getElementById("story-tab").classList.add("show");
    document.getElementById("story-tab").classList.remove("hidden");
    document.getElementById("story-tab").classList.remove("hero-story");
}