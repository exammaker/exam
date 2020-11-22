function main() {
    // load content and write to #app
    // $("#app").load( TODO )

    sidebar = new Vue({
        el: "#sidebar",
        data: {
            notifications: 5
        }
    })

    // finished loading
    $("#loadingmessage").hide()
    $("#app").show()
}