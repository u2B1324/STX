$(document).ready(function(){
    // 공지사항 데이터
    var noticeData = [{
            link: "#",
            title: "에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (2차)"
        },
        {
            link: "#",
            title: "에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (1차)"
        },
        {
            link: "#",
            title: "2021년도 협력업체 모집공고"
        },
        {
            link: "#",
            title: "STX건설 상호 사용 관련 안내"
        }
    ];

    var noticeList = $(".notice-list");

    // 뉴스 데이터
    var newsData = [{
            link: "#",
            title: "STX건설, 춘천 레고랜드 테마파크 시공사 ‘선정’"
        },
        {
            link: "#",
            title: "STX건설, 2018년 성장 '청신호'"
        }
    ];

    var newsList = $(".news-list");

    // 출력
    function listMake(data, tag) {
        var temp = "";
        if (data === noticeList) {
            for (var i = 0; i < data.length; i++) {
                temp += `<li><a href="${data[i].link}"><span class="notice-list-txt">${data[i].title}</span></a></li>`
            };
        } else if (data === newsData) {
            for (var i = 0; i < data.length; i++) {
                temp += `<li><a href="${data[i].link}">${data[i].title}</a></li>`
            }
        }
        tag.html(temp);
    }

    listMake(noticeData, noticeList);
    listMake(newsData, newsList);
});

window.onload = function(){

}