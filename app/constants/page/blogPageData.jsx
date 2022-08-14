const BLOG_CONSTANTS = {
  MENUS: ['전체', '명도이야기', '소송사례', '콩밥소개', '공지'],
  LIST: [
    {
      thumbnail:
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbgHhnJ%2FbtrJBeafEvW%2F0p16XGG94Ho6L6ECBPLBxk%2Fimg.png',

      link: 'https://blog.naver.com/PostView.naver?blogId=congbablaw&logNo=222846568137&redirect=Dlog&widgetTypeCall=true&directAccess=false',
      category: '콩밥소개',
      title: '명도소송 콩밥을 이용해야 하는 이유',
      desc: "안녕하세요. '콩밥'의 대표변호사 김서영입니다. 저는 사법시험을 통과하여 2009년부터 현재까지 14년차 변호사로 활동하고 있으며, 2016년에 법률사무소 이소를 창업하여 7년째 운영하고 있습니다.",
    },
    {
      thumbnail:
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtfXL8%2FbtrJFP8wFq2%2Fo0RadoJSxUiUyLx1vVYmKk%2Fimg.png',
      link: 'https://blog.naver.com/PostView.naver?blogId=congbablaw&logNo=222846572848&redirect=Dlog&widgetTypeCall=true&directAccess=false',
      category: '명도이야기',
      title: '점유이전금지 가처분 진행절차 알아보기',
      desc: '점유이전금지 가처분은 명도소송과 동시에 또는 명도소송 이전에 진행하는 것으로, 임차인이 타인에게 점유를 이전하지 못하도록 법원에 신청하는 보전처분입니다. ',
    },
    {
      thumbnail:
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbcr0v0%2FbtrJIsE1Bqc%2FAkckicXENYYKTJIwbFow6K%2Fimg.png',
      link: 'https://blog.naver.com/PostView.naver?blogId=congbablaw&logNo=222846576414&redirect=Dlog&widgetTypeCall=true&directAccess=false',
      category: '명도이야기',
      title: '명도소송 진행절차 알아보기',
      desc: '명도소송은 부동산 소유자 또는 임대인이 임차인이나 불법점유자를 상대로 제기하는 소송으로 8단계의 진행절차가 있습니다.',
    },
    {
      thumbnail:
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbBrpgc%2FbtrJELFkGuA%2FwjCeP8Jq94BKnhBBj7452K%2Fimg.png',
      link: 'https://blog.naver.com/PostView.naver?blogId=congbablaw&logNo=222848163287&redirect=Dlog&widgetTypeCall=true&directAccess=false',
      category: '명도이야기',
      title: '명도소송 비용 구체적으로 얼마나 나올까',
      desc: '많은 임대인들이, 월세미납 등 재산권의 침해가 있음에도 명도소송 비용에 부담을 느껴 소송 진행을 지연합니다. ',
    },
    {
      thumbnail:
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqHhOs%2FbtrJLSDcvYs%2FRPckDKQ92LiKAe3IsPirTK%2Fimg.png',
      link: 'https://blog.naver.com/PostView.naver?blogId=congbablaw&logNo=222848166103&redirect=Dlog&widgetTypeCall=true&directAccess=false',
      category: '명도이야기',
      title: '명도소송 판결까지 얼마나 걸릴까',
      desc: '명도소송은 보통 소요기간 때문에 망설이시는 경우가 많습니다. 일반적으로 민사소송은 보통 1년 이상 소요되고 있으나, 그 중에서도 명도소송은 빠르게 종결되는 편입니다. ',
    },
    {
      thumbnail:
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcmp7h2%2FbtrJC46s87o%2F6pM2exo4l40Zf1jjarzS2K%2Fimg.png',
      link: 'https://blog.naver.com/PostView.naver?blogId=congbablaw&logNo=222848166967&redirect=Dlog&widgetTypeCall=true&directAccess=false',
      category: '명도이야기',
      title: '소송 승소시 변호사 비용도 받을 수 있을까',
      desc: '명도소송에서도 보증금이 남아 있거나 임차인이 매출이 있는 경우 경우 변호사 비용 보전을 받은 사례들이 있습니다.',
    },
    {
      thumbnail:
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fblt8cS%2FbtrJGVOdL3k%2FvPtmUj50LEqneuuEwATOkK%2Fimg.png',
      link: 'https://blog.naver.com/PostView.naver?blogId=congbablaw&logNo=222847275229&redirect=Dlog&widgetTypeCall=true&directAccess=false',
      category: '명도이야기',
      title: '월세미납내용증명 작성방법과 무료양식',
      desc: '내용증명 우편은 우편법 시행규칙 제25조 1항 4호 가목에 따라 언제, 누구에게 어떤 내용의 문서를 발송했다는 사실을 우체국장이 보증하는 특수우편으로, 법정에서 문서를 보낸 사실에 대한 증거로 활용될 수 있습니다.',
    },
    {
      thumbnail:
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbGro5A%2FbtrJCqhELtl%2FaWgUA5wDg4wFKRNaOy00Ik%2Fimg.png',
      link: 'https://blog.naver.com/PostView.naver?blogId=congbablaw&logNo=222847494063&redirect=Dlog&widgetTypeCall=true&directAccess=false',
      category: '소송사례',
      title: '점유이전금지가처분 월세미납 해결된 사례',
      desc: '점유이전금지가처분 신청부터 집행까지는 약 18일이 소요된 사례입니다. 소송을 빠르게 시작한 덕분에 보증금이 일부 남아있었기 때문에 소송비용도 많은 부분의 보전을 받을 수 있었습니다.',
    },
    {
      thumbnail:
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbtKmrw%2FbtrJFOu3m1A%2F7MQiEhswtNrqwMFjaLo000%2Fimg.png',
      link: 'https://blog.naver.com/PostView.naver?blogId=congbablaw&logNo=222847572226&redirect=Dlog&widgetTypeCall=true&directAccess=false',
      category: '명도이야기',
      title: '월세미납 시 임차인이 받는 불이익',
      desc: '임대인은 임차인의 월세 연체액이 3기(주택의 경우 2기)에 달한 경우, 임차인의 권리를 상실시키고 싶다면 ​지체하지말고 바로 계약해지 통지를 하여야 합니다. ',
    },
    // {
    //   thumbnail:
    //     '',
    //   link: 'https://post.naver.com/viewer/postView.naver?volumeNo=34170287&memberNo=6345811',
    //   category: '명도이야기',
    //   title: '나홀로 소송, 전체 프로세스 돌아보기',
    //   desc: "",
    // },
    // {
    //   thumbnail:
    //     '',
    //   link: 'https://post.naver.com/viewer/postView.naver?volumeNo=34170287&memberNo=6345811',
    //   category: '명도이야기',
    //   title: '나홀로 소송, 전체 프로세스 돌아보기',
    //   desc: "",
    // },
    // {
    //   thumbnail:
    //     '',
    //   link: 'https://post.naver.com/viewer/postView.naver?volumeNo=34170287&memberNo=6345811',
    //   category: '명도이야기',
    //   title: '나홀로 소송, 전체 프로세스 돌아보기',
    //   desc: "",
    // },
    // {
    //   thumbnail:
    //     '',
    //   link: 'https://post.naver.com/viewer/postView.naver?volumeNo=34170287&memberNo=6345811',
    //   category: '명도이야기',
    //   title: '나홀로 소송, 전체 프로세스 돌아보기',
    //   desc: "",
    // },
    // {
    //   thumbnail:
    //     '',
    //   link: 'https://post.naver.com/viewer/postView.naver?volumeNo=34170287&memberNo=6345811',
    //   category: '명도이야기',
    //   title: '나홀로 소송, 전체 프로세스 돌아보기',
    //   desc: "",
    // },
    // {
    //   thumbnail:
    //     '',
    //   link: 'https://post.naver.com/viewer/postView.naver?volumeNo=34170287&memberNo=6345811',
    //   category: '명도이야기',
    //   title: '나홀로 소송, 전체 프로세스 돌아보기',
    //   desc: "",
    // },
    // {
    //   thumbnail:
    //     '',
    //   link: 'https://post.naver.com/viewer/postView.naver?volumeNo=34170287&memberNo=6345811',
    //   category: '명도이야기',
    //   title: '나홀로 소송, 전체 프로세스 돌아보기',
    //   desc: "",
    // },
    // {
    //   thumbnail:
    //     '',
    //   link: 'https://post.naver.com/viewer/postView.naver?volumeNo=34170287&memberNo=6345811',
    //   category: '명도이야기',
    //   title: '나홀로 소송, 전체 프로세스 돌아보기',
    //   desc: "",
    // },
    // {
    //   thumbnail:
    //     '',
    //   link: 'https://post.naver.com/viewer/postView.naver?volumeNo=34170287&memberNo=6345811',
    //   category: '명도이야기',
    //   title: '나홀로 소송, 전체 프로세스 돌아보기',
    //   desc: "",
    // },
    // {
    //   thumbnail:
    //     '',
    //   link: 'https://post.naver.com/viewer/postView.naver?volumeNo=34170287&memberNo=6345811',
    //   category: '명도이야기',
    //   title: '나홀로 소송, 전체 프로세스 돌아보기',
    //   desc: "",
    // },
    // {
    //   thumbnail:
    //     '',
    //   link: 'https://post.naver.com/viewer/postView.naver?volumeNo=34170287&memberNo=6345811',
    //   category: '명도이야기',
    //   title: '나홀로 소송, 전체 프로세스 돌아보기',
    //   desc: "",
    // },
  ],
};

export default BLOG_CONSTANTS;
