function SetVolumeToPercent(volume) {
    console.log("Setting volume?");

    var volumeSlider = document.querySelector(".html5-video-player");
    var videoElement = volumeSlider.querySelector("video");

    // Set the volume
    videoElement.volume = volume;

    // Trigger input event on the volume slider
    //var inputEvent = new Event("input", { bubbles: true });
    //volumeSlider.querySelector(".ytp-volume-slider").dispatchEvent(inputEvent);
}
