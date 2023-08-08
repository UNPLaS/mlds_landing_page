var a = document.getElementById("selector").addEventListener("change", function () {
    if (this.value === "nameDownbtn") {
        sortListNameDown0(), sortListNameDown1(), sortListNameDown2(), sortListNameDown3(), sortListNameDown4(),
            sortListNameDown5(), sortListNameDown6(), sortListNameDown7(), sortListNameDown8(), sortListNameDown9(),
            sortListNameDown10(), sortListNameDown11(), sortListNameDown12(), sortListNameDown13(), sortListNameDown14(),
            sortListNameDown15(), sortListNameDown16(), sortListNameDown17(), sortListNameDown18(), sortListNameDown19(),
            sortListNameDown20(), sortListNameDown21(), sortListNameDown22(), sortListNameDown23(), sortListNameDown24(),
            sortListNameDown25(), sortListNameDown26(), sortListNameDown27(), sortListNameDown28(), sortListNameDown29(),
            sortListNameDown30(), sortListNameDown31(), sortListNameDown32(), sortListNameDown33(), sortListNameDown34();
    } else if (this.value === "nameUpbtn") {
        sortListNameUp0(), sortListNameUp1(), sortListNameUp2(), sortListNameUp3(), sortListNameUp4(),
            sortListNameUp5(), sortListNameUp6(), sortListNameUp7(), sortListNameUp8(), sortListNameUp9(),
            sortListNameUp10(), sortListNameUp11(), sortListNameUp12(), sortListNameUp13(), sortListNameUp14(),
            sortListNameUp15(), sortListNameUp16(), sortListNameUp17(), sortListNameUp18(), sortListNameUp19(),
            sortListNameUp20(), sortListNameUp21(), sortListNameUp22(), sortListNameUp23(), sortListNameUp24(),
            sortListNameUp25(), sortListNameUp26(), sortListNameUp27(), sortListNameUp28(), sortListNameUp29(),
            sortListNameUp30(), sortListNameUp31(), sortListNameUp32(), sortListNameUp33(), sortListNameUp34();
    } else if (this.value === "detailsDownbtn") {
        sortListDetailsDown0(), sortListDetailsDown1(), sortListDetailsDown2(), sortListDetailsDown3(), sortListDetailsDown4(),
            sortListDetailsDown5(), sortListDetailsDown6(), sortListDetailsDown7(), sortListDetailsDown8(), sortListDetailsDown9(),
            sortListDetailsDown10(), sortListDetailsDown11(), sortListDetailsDown12(), sortListDetailsDown13(), sortListDetailsDown14(),
            sortListDetailsDown15(), sortListDetailsDown16(), sortListDetailsDown17(), sortListDetailsDown18(), sortListDetailsDown19(),
            sortListDetailsDown20(), sortListDetailsDown21(), sortListDetailsDown22(), sortListDetailsDown23(), sortListDetailsDown24(),
            sortListDetailsDown25(), sortListDetailsDown26(), sortListDetailsDown27(), sortListDetailsDown28(), sortListDetailsDown29(),
            sortListDetailsDown30(), sortListDetailsDown31(), sortListDetailsDown32(), sortListDetailsDown33(), sortListDetailsDown34();
    } else if (this.value === "detailsUpbtn") {
        sortListDetailsUp0(), sortListDetailsUp1(), sortListDetailsUp2(), sortListDetailsUp3(), sortListDetailsUp4(),
            sortListDetailsUp5(), sortListDetailsUp6(), sortListDetailsUp7(), sortListDetailsUp8(), sortListDetailsUp9(),
            sortListDetailsUp10(), sortListDetailsUp11(), sortListDetailsUp12(), sortListDetailsUp13(), sortListDetailsUp14(),
            sortListDetailsUp15(), sortListDetailsUp16(), sortListDetailsUp17(), sortListDetailsUp18(), sortListDetailsUp19(),
            sortListDetailsUp20(), sortListDetailsUp21(), sortListDetailsUp22(), sortListDetailsUp23(), sortListDetailsUp24(),
            sortListDetailsUp25(), sortListDetailsUp26(), sortListDetailsUp27(), sortListDetailsUp28(), sortListDetailsUp29(),
            sortListDetailsUp30(), sortListDetailsUp31(), sortListDetailsUp32(), sortListDetailsUp33(), sortListDetailsUp34();
    } else if (this.value === "yearDownbtn") {
        sortListYearDown0(), sortListYearDown1(), sortListYearDown2(), sortListYearDown3(), sortListYearDown4(),
            sortListYearDown5(), sortListYearDown6(), sortListYearDown7(), sortListYearDown8(), sortListYearDown9(),
            sortListYearDown10(), sortListYearDown11(), sortListYearDown12(), sortListYearDown13(), sortListYearDown14(),
            sortListYearDown15(), sortListYearDown16(), sortListYearDown17(), sortListYearDown18(), sortListYearDown19(),
            sortListYearDown20(), sortListYearDown21(), sortListYearDown22(), sortListYearDown23(), sortListYearDown24(),
            sortListYearDown25(), sortListYearDown26(), sortListYearDown27(), sortListYearDown28(), sortListYearDown29(),
            sortListYearDown30(), sortListYearDown31(), sortListYearDown32(), sortListYearDown33(), sortListYearDown34();
    } else if (this.value === "yearUpbtn") {
        sortListYearUp0(), sortListYearUp1(), sortListYearUp2(), sortListYearUp3(), sortListYearUp4(),
            sortListYearUp5(), sortListYearUp6(), sortListYearUp7(), sortListYearUp8(), sortListYearUp9(),
            sortListYearUp10(), sortListYearUp11(), sortListYearUp12(), sortListYearUp13(), sortListYearUp14(),
            sortListYearUp15(), sortListYearUp16(), sortListYearUp17(), sortListYearUp18(), sortListYearUp19(),
            sortListYearUp20(), sortListYearUp21(), sortListYearUp22(), sortListYearUp23(), sortListYearUp24(),
            sortListYearUp25(), sortListYearUp26(), sortListYearUp27(), sortListYearUp28(), sortListYearUp29(),
            sortListYearUp30(), sortListYearUp31(), sortListYearUp32(), sortListYearUp33(), sortListYearUp34();
    }
});
/*
document.getElementById("nameDownbtn").addEventListener("click", () => {
    sortListNameDown0(), sortListNameDown1(), sortListNameDown2(), sortListNameDown3(), sortListNameDown4(),
        sortListNameDown5(), sortListNameDown6(), sortListNameDown7(), sortListNameDown8(), sortListNameDown9(),
        sortListNameDown10(), sortListNameDown11(), sortListNameDown12(), sortListNameDown13(), sortListNameDown14(),
        sortListNameDown15(), sortListNameDown16()
});
document.getElementById("nameUpbtn").addEventListener("click", () => {
    sortListNameUp0(), sortListNameUp1(), sortListNameUp2(), sortListNameUp3(), sortListNameUp4(),
        sortListNameUp5(), sortListNameUp6(), sortListNameUp7(), sortListNameUp8(), sortListNameUp9(),
        sortListNameUp10(), sortListNameUp11(), sortListNameUp12(), sortListNameUp13(), sortListNameUp14(),
        sortListNameUp15(), sortListNameUp16()
});
document.getElementById("detailsDownbtn").addEventListener("click", () => {
    sortListDetailsDown0(), sortListDetailsDown1(), sortListDetailsDown2(), sortListDetailsDown3(), sortListDetailsDown4(),
        sortListDetailsDown5(), sortListDetailsDown6(), sortListDetailsDown7(), sortListDetailsDown8(), sortListDetailsDown9(),
        sortListDetailsDown10(), sortListDetailsDown11(), sortListDetailsDown12(), sortListDetailsDown13(), sortListDetailsDown14(),
        sortListDetailsDown15(), sortListDetailsDown16()
});
document.getElementById("detailsUpbtn").addEventListener("click", () => {
    sortListDetailsUp0(), sortListDetailsUp1(), sortListDetailsUp2(), sortListDetailsUp3(), sortListDetailsUp4(),
        sortListDetailsUp5(), sortListDetailsUp6(), sortListDetailsUp7(), sortListDetailsUp8(), sortListDetailsUp9(),
        sortListDetailsUp10(), sortListDetailsUp11(), sortListDetailsUp12(), sortListDetailsUp13(), sortListDetailsUp14(),
        sortListDetailsUp15(), sortListDetailsUp16()
});
document.getElementById("yearDownbtn").addEventListener("click", () => {
    sortListYearDown0(), sortListYearDown1(), sortListYearDown2(), sortListYearDown3(), sortListYearDown4(),
        sortListYearDown5(), sortListYearDown6(), sortListYearDown7(), sortListYearDown8(), sortListYearDown9(),
        sortListYearDown10(), sortListYearDown11(), sortListYearDown12(), sortListYearDown13(), sortListYearDown14(),
        sortListYearDown15(), sortListYearDown16()
});
document.getElementById("yearUpbtn").addEventListener("click", () => {
    sortListYearUp0(), sortListYearUp1(), sortListYearUp2(), sortListYearUp3(), sortListYearUp4(),
        sortListYearUp5(), sortListYearUp6(), sortListYearUp7(), sortListYearUp8(), sortListYearUp9(),
        sortListYearUp10(), sortListYearUp11(), sortListYearUp12(), sortListYearUp13(), sortListYearUp14(),
        sortListYearUp15(), sortListYearUp16()
});*/
function sortListNameDown0() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list0");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown1() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list1");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown2() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list2");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown3() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list3");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown4() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list4");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown5() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list5");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown6() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list6");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown7() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list7");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown8() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list8");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown9() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list9");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown10() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list10");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown11() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list11");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown12() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list12");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown13() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list13");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown14() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list14");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown15() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list15");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown16() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list16");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown17() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list17");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown18() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list18");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown19() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list19");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown20() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list20");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown21() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list21");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown22() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list22");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown23() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list23");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown24() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list24");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown25() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list25");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown26() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list26");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown27() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list27");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown28() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list28");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown29() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list29");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown30() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list30");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown31() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list31");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown32() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list32");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown33() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list33");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameDown34() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list34");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML < LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp0() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list0");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp1() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list1");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp2() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list2");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp3() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list3");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp4() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list4");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp5() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list5");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp6() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list6");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp7() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list7");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp8() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list8");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp9() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list9");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp10() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list10");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp11() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list11");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp12() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list12");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp13() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list13");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp14() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list14");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp15() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list15");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp16() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list16");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp17() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list17");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp18() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list18");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp19() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list19");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp20() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list20");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp21() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list21");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp22() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list22");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp23() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list23");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp24() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list24");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp25() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list25");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp26() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list26");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp27() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list27");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp28() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list28");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp29() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list29");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp30() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list30");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp31() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list31");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp32() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list32");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp33() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list33");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListNameUp34() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list34");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[2].innerHTML > LiEle[i + 1].children[0].children[1].children[2].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown0() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list0");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown1() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list1");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown2() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list2");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown3() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list3");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown4() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list4");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown5() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list5");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown6() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list6");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown7() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list7");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown8() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list8");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown9() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list9");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown10() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list10");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown11() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list11");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown12() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list12");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown13() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list13");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown14() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list14");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown15() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list15");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown16() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list16");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown17() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list17");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown18() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list18");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown19() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list19");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown20() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list20");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown21() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list21");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown22() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list22");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown23() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list23");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown24() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list24");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown25() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list25");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown26() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list26");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown27() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list27");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown28() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list28");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown29() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list29");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown30() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list30");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown31() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list31");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown32() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list32");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown33() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list33");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsDown34() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list34");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML < LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp0() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list0");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp1() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list1");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp2() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list2");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp3() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list3");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp4() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list4");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp5() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list5");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp6() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list6");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp7() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list7");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp8() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list8");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp9() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list9");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp10() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list10");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp11() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list11");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp12() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list12");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp13() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list13");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp14() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list14");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp15() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list15");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp16() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list16");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp17() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list17");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp18() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list18");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp19() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list19");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp20() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list20");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp21() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list21");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp22() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list22");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp23() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list23");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp24() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list24");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp25() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list25");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp26() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list26");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp27() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list27");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp28() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list28");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp29() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list29");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp30() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list30");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp31() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list31");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp32() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list32");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp33() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list33");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListDetailsUp34() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list34");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[0].innerHTML > LiEle[i + 1].children[0].children[1].children[0].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown0() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list0");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown1() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list1");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown2() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list2");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown3() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list3");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown4() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list4");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown5() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list5");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown6() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list6");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown7() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list7");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown8() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list8");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown9() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list9");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown10() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list10");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown11() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list11");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown12() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list12");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown13() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list13");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown14() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list14");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown15() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list15");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown16() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list16");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown17() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list17");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown18() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list18");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown19() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list19");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown20() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list20");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown21() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list21");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown22() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list22");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown23() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list23");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown24() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list24");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown25() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list25");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown26() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list26");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown27() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list27");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown28() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list28");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown29() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list29");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown30() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list30");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown31() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list31");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown32() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list32");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown33() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list33");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearDown34() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list34");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML < LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp0() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list0");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp1() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list1");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp2() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list2");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp3() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list3");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp4() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list4");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp5() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list5");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp6() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list6");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp7() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list7");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp8() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list8");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp9() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list9");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp10() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list10");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp11() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list11");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp12() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list12");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp13() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list13");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp14() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list14");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp15() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list15");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp16() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list16");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp17() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list17");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp18() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list18");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp19() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list19");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp20() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list20");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp21() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list21");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp22() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list22");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp23() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list23");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp24() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list24");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp25() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list25");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp26() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list26");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp27() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list27");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp28() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list28");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp29() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list29");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp30() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list30");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp31() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list31");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp32() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list32");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp33() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list33");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}
function sortListYearUp34() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".list34");
    sortFlag = true;
    while (sortFlag) {
        sortFlag = false;
        LiEle = list.getElementsByTagName("LI");
        for (i = 0; i < LiEle.length - 1; i++) {
            sorted = false;
            if (LiEle[i].children[0].children[1].children[1].innerHTML > LiEle[i + 1].children[0].children[1].children[1].innerHTML) {
                sorted = true;
                break;
            }
        }
        if (sorted) {
            LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
            sortFlag = true;
        }
    }
}