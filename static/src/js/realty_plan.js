odoo.define('odoo.sce_designlib', function(require){
"use strict";

$(document).ready(function (){
    function product_search(){
        //if($(".oe_core_types dd:visible").length>8){
            //$(".oe_core_image").hide();
        //}
        $(".help_content").hide();
        $(".help_control").click(function(){
            $(".help_content").slideToggle(500);
        });
        //
        $(".select").hide();
        $(".oe_core_types").hide();
        $(".search_control").click(function(){
            $(".select").slideToggle(500);
        });
        core_type_refresh();

        //var sHoverTimer, sOutTimer;
        //$(".oe_search_bar").hover(function(){
            //window.clearTimeout(sOutTimer);
            //sHoverTimer = window.setTimeout(function () {
                //$(".select").slideDown(500);
            //},200);
        //}, function () {
            //window.clearTimeout(sHoverTimer);
            //sOutTimer = window.setTimeout(function () {
                //$(".select").slideUp(500);
            //},200);
        //});

        $("#select1 dd").click(function () {
            $(this).addClass("selected").siblings().removeClass("selected");
            if ($(this).hasClass("select-all")) {
                $("#selectA").remove();
            } else {
                var copyThisA = $(this).clone();
                if ($("#selectA").length > 0) {
                    //$("#selectA").html($(this).html());
                    $("#selectA").remove();
                    $(".select-result dl").append(copyThisA.attr("id", "selectA"));
                } else {
                    $(".select-result dl").append(copyThisA.attr("id", "selectA"));
                }
            }
            core_type_refresh();
        });

        $("#select2 dd").click(function () {
            $(this).addClass("selected").siblings().removeClass("selected");
            if ($(this).hasClass("select-all")) {
                $("#selectB").remove();
            } else {
                var copyThisB = $(this).clone();
                if ($("#selectB").length > 0) {
                    $("#selectB").remove();
                    $(".select-result dl").append(copyThisB.attr("id", "selectB"));
                    //$("#selectB").html($(this).html());
                } else {
                    $(".select-result dl").append(copyThisB.attr("id", "selectB"));
                }
            }
            core_type_refresh();
        });

        $("#select3 dd").click(function () {
            $("#select3 dd").removeClass("selected");
            $(this).addClass("selected");
            //$(this).addClass("selected").siblings().removeClass("selected");
            if ($(this).hasClass("select-all")) {
                $("#selectC").remove();
            } else {
                var copyThisC = $(this).clone();
                copyThisC.find(".oe_core_image").remove();
                if ($("#selectC").length > 0) {
                    $("#selectC").html(copyThisC.html());
                } else {
                    $(".select-result dl").append(copyThisC.attr("id", "selectC"));
                }
            }
        });
        
        var hoverTimer, outTimer;
        $(".core_type_select").hover(function () {
            window.clearTimeout(outTimer);
            hoverTimer = window.setTimeout(function () {
                $(".oe_core_types").show(500);
            }, 200);
        }, function () {
            window.clearTimeout(hoverTimer);
            outTimer = window.setTimeout(function () {
                $(".oe_core_types").hide(500);
            }, 200);
        });

        //$(".core_type_select").hover(function () {
            //$(".oe_core_types").stop(false, true).slideToggle(500);
        //});

        $("#select4 dd").click(function () {
            $(this).addClass("selected").siblings().removeClass("selected");
            if ($(this).hasClass("select-all")) {
                $("#selectD").remove();
            } else {
                var copyThisC = $(this).clone();
                if ($("#selectD").length > 0) {
                    $("#selectD").html($(this).html());
                } else {
                    $(".select-result dl").append(copyThisC.attr("id", "selectD"));
                }
            }
        });

        $("#select5 dd").click(function () {
            $(this).addClass("selected").siblings().removeClass("selected");
            if ($(this).hasClass("select-all")) {
                $("#selectE").remove();
            } else {
                var copyThisC = $(this).clone();
                if ($("#selectE").length > 0) {
                    $("#selectE").html($(this).html());
                } else {
                    $(".select-result dl").append(copyThisC.attr("id", "selectE"));
                }
            }
        });

        $("#select6 dd").click(function () {
            $(this).addClass("selected").siblings().removeClass("selected");
            if ($(this).hasClass("select-all")) {
                $("#selectF").remove();
            } else {
                var copyThisC = $(this).clone();
                if ($("#selectF").length > 0) {
                    $("#selectF").html($(this).html());
                } else {
                    $(".select-result dl").append(copyThisC.attr("id", "selectF"));
                }
            }
        });

        $(".select-result dl").on("click", "#selectA", function () {
            $("#selectA").remove();
            $("#select1 .select-all").addClass("selected").siblings().removeClass("selected");
        });

        $(".select-result dl").on("click", "#selectB", function () {
            $("#selectB").remove();
            $("#select2 .select-all").addClass("selected").siblings().removeClass("selected");
        });

        $(".select-result dl").on("click", "#selectC", function () {
            $("#selectC").remove();
            $("#select3 dd").removeClass("selected");
            $("#select3 .select-all").addClass("selected");
            //$("#select3 .select-all").addClass("selected").siblings().removeClass("selected");
        });

        $(".select-result dl").on("click", "#selectD", function () {
            $("#selectD").remove();
            $("#select4 .select-all").addClass("selected").siblings().removeClass("selected");
        });

        $(".select-result dl").on("click", "#selectE", function () {
            $("#selectE").remove();
            $("#select5 .select-all").addClass("selected").siblings().removeClass("selected");
        });

        $(".select-result dl").on("click", "#selectF", function () {
            $("#selectF").remove();
            $("#select6 .select-all").addClass("selected").siblings().removeClass("selected");
        });

        function core_type_refresh() {
            $(".oe_core_types dd").hide();
            var filter0="";
            var filter1="";
            if($("#selectA").length>0){
                filter0="."+$("#selectA").attr("class").split(" ")[0];
            }
            if($("#selectB").length>0){
                filter1="."+$("#selectB").attr("class").split(" ")[0];
            }
            if(filter0!="" && filter1!=""){
                $(".oe_core_types dd").filter(filter0).filter(filter1).show();
            }else if(filter0!=""){
                $(".oe_core_types dd").filter(filter0).show();
            }else if(filter1!=""){
                $(".oe_core_types dd").filter(filter1).show();
            }else{
                $(".oe_core_types dd").show();
            }
            if($(".oe_core_types dd[style*=block]").length>8){
                $(".oe_core_image").hide();
            }else{
                $(".oe_core_image").show();
            }
        }

        $(document).on("click", ".select dd", function () {
            if ($(".select-result dd").length > 1) {
                $(".select-no").hide();
            } else {
                $(".select-no").show();
            }
        });
    }//end of product_search function
    //call product_search
    product_search(); });
});
//
//odoo.sce_designlibe = function(instance, local) {
    //var _t = instance.web._t,
        //_lt = instance.web._lt;
    //var QWeb = instance.web.qweb;

    //local.HomePage = instance.Widget.extend({
        //start: function() {
            //console.log("pet store home page loaded");
        //},
    //});

    //instance.web.client_actions.add(
        //'sce_designlib.homepage', 'instance.sce_designlib.HomePage');
//}
