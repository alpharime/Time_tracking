window.onload = function() {
    $.get("./js/data.json", function get(data) {

        //work
        document.querySelector(".btn_1").addEventListener("click", function(e) {
            e.preventDefault()

            $(this).addClass("Active");
            $(".work_h1").html(data[0].timeframes.daily.current + "hrs");
            $(".work_h3").html("Last Week-" + data[0].timeframes.daily.previous + "hrs");
            $(".btn_2, .btn_3").removeClass("Active");
            // $(".btn_3").removeClass("Active");


        })
        document.querySelector(".btn_2").addEventListener("click", function(e) {
            e.preventDefault()
            $(this).addClass("Active");
            $(".work_h1").html(data[0].timeframes.weekly.current + "hrs");
            $(".work_h3").html("Last Week-" + data[0].timeframes.weekly.previous + "hrs");
            $(".btn_1").removeClass("Active");
            $(".btn_3").removeClass("Active");
        })
        document.querySelector(".btn_3").addEventListener("click", function(e) {
                e.preventDefault()
                $(this).addClass("Active");
                $(".work_h1").html(data[0].timeframes.monthly.current + "hrs");
                $(".work_h3").html("Last Week-" + data[0].timeframes.monthly.previous + "hrs");
                $(".btn_2").removeClass("Active");
                $(".btn_1").removeClass("Active");
            })
            //play
        document.querySelector(".btn_1").addEventListener("click", function(e) {
            e.preventDefault()

            $(this).addClass("Active");
            $(".play_h1").html(data[1].timeframes.daily.current + "hrs");
            $(".play_h3").html("Last Week-" + data[1].timeframes.daily.previous + "hrs");
            $(".btn_2, .btn_3").removeClass("Active");
            // $(".btn_3").removeClass("Active");


        })
        document.querySelector(".btn_2").addEventListener("click", function(e) {
            e.preventDefault()
            $(this).addClass("Active");
            $(".play_h1").html(data[1].timeframes.weekly.current + "hrs");
            $(".play_h3").html("Last Week-" + data[1].timeframes.weekly.previous + "hrs");
            $(".btn_1").removeClass("Active");
            $(".btn_3").removeClass("Active");
        })
        document.querySelector(".btn_3").addEventListener("click", function(e) {
                e.preventDefault()
                $(this).addClass("Active");
                $(".play_h1").html(data[1].timeframes.monthly.current + "hrs");
                $(".play_h3").html("Last Week-" + data[1].timeframes.monthly.previous + "hrs");
                $(".btn_2").removeClass("Active");
                $(".btn_1").removeClass("Active");
            })
            //study
        document.querySelector(".btn_1").addEventListener("click", function(e) {
            e.preventDefault()

            $(this).addClass("Active");
            $(".study_h1").html(data[2].timeframes.daily.current + "hrs");
            $(".study_h3").html("Last Week-" + data[2].timeframes.daily.previous + "hrs");
            $(".btn_2, .btn_3").removeClass("Active");
            // $(".btn_3").removeClass("Active");


        })
        document.querySelector(".btn_2").addEventListener("click", function(e) {
            e.preventDefault()
            $(this).addClass("Active");
            $(".study_h1").html(data[2].timeframes.weekly.current + "hrs");
            $(".study_h3").html("Last Week-" + data[2].timeframes.weekly.previous + "hrs");
            $(".btn_1").removeClass("Active");
            $(".btn_3").removeClass("Active");
        })
        document.querySelector(".btn_3").addEventListener("click", function(e) {
                e.preventDefault()
                $(this).addClass("Active");
                $(".study_h1").html(data[2].timeframes.monthly.current + "hrs");
                $(".study_h3").html("Last Week-" + data[2].timeframes.monthly.previous + "hrs");
                $(".btn_2").removeClass("Active");
                $(".btn_1").removeClass("Active");
            })
            //exercise
        document.querySelector(".btn_1").addEventListener("click", function(e) {
            e.preventDefault()

            $(this).addClass("Active");
            $(".exercise_h1").html(data[3].timeframes.daily.current + "hrs");
            $(".exercise_h3").html("Last Week-" + data[3].timeframes.daily.previous + "hrs");
            $(".btn_2, .btn_3").removeClass("Active");
            // $(".btn_3").removeClass("Active");


        })
        document.querySelector(".btn_2").addEventListener("click", function(e) {
            e.preventDefault()
            $(this).addClass("Active");
            $(".exercise_h1").html(data[3].timeframes.weekly.current + "hrs");
            $(".exercise_h3").html("Last Week-" + data[3].timeframes.weekly.previous + "hrs");
            $(".btn_1").removeClass("Active");
            $(".btn_3").removeClass("Active");
        })
        document.querySelector(".btn_3").addEventListener("click", function(e) {
                e.preventDefault()
                $(this).addClass("Active");
                $(".exercise_h1").html(data[3].timeframes.monthly.current + "hrs");
                $(".exercise_h3").html("Last Week-" + data[3].timeframes.monthly.previous + "hrs");
                $(".btn_2").removeClass("Active");
                $(".btn_1").removeClass("Active");
            })
            //social
        document.querySelector(".btn_1").addEventListener("click", function(e) {
            e.preventDefault()

            $(this).addClass("Active");
            $(".social_h1").html(data[4].timeframes.daily.current + "hrs");
            $(".social_h3").html("Last Week-" + data[4].timeframes.daily.previous + "hrs");
            $(".btn_2, .btn_3").removeClass("Active");
            // $(".btn_3").removeClass("Active");


        })
        document.querySelector(".btn_2").addEventListener("click", function(e) {
            e.preventDefault()
            $(this).addClass("Active");
            $(".social_h1").html(data[4].timeframes.weekly.current + "hrs");
            $(".social_h3").html("Last Week-" + data[4].timeframes.weekly.previous + "hrs");
            $(".btn_1").removeClass("Active");
            $(".btn_3").removeClass("Active");
        })
        document.querySelector(".btn_3").addEventListener("click", function(e) {
            e.preventDefault()
            $(this).addClass("Active");
            $(".social_h1").html(data[4].timeframes.monthly.current + "hrs");
            $(".social_h3").html("Last Week-" + data[4].timeframes.monthly.previous + "hrs");
            $(".btn_2").removeClass("Active");
            $(".btn_1").removeClass("Active");
        })

        //selfcare
        document.querySelector(".btn_1").addEventListener("click", function(e) {
            e.preventDefault()
            $(this).addClass("Active");
            $(".selfcare_h1").html(data[5].timeframes.daily.current + "hrs");
            $(".selfcare_h3").html("Last Week-" + data[5].timeframes.daily.previous + "hrs");
            $(".btn_2, .btn_3").removeClass("Active");
            // $(".btn_3").removeClass("Active");


        })
        document.querySelector(".btn_2").addEventListener("click", function(e) {
            e.preventDefault()
            $(this).addClass("Active");
            $(".selfcare_h1").html(data[5].timeframes.weekly.current + "hrs");
            $(".selfcare_h3").html("Last Week-" + data[5].timeframes.weekly.previous + "hrs");
            $(".btn_1").removeClass("Active");
            $(".btn_3").removeClass("Active");
        })
        document.querySelector(".btn_3").addEventListener("click", function(e) {
            e.preventDefault()
            $(this).addClass("Active");
            $(".selfcare_h1").html(data[5].timeframes.monthly.current + "hrs");
            $(".selfcare_h3").html("Last Week-" + data[5].timeframes.monthly.previous + "hrs");
            $(".btn_2").removeClass("Active");
            $(".btn_1").removeClass("Active");
        })
        return data
    }, "json");


}