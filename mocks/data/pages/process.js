const PROCESS_CONSTANTS = {
  LITIGATION_INFO: [
    {
      icon: '🏦',
      title: '상가',
      desc: '상가임대차보호법이 적용되는 상가는 <b>월세가 3기 이상 연체시</b> 명도소송 가능',
    },
    {
      icon: '🏠',
      title: '주택',
      desc: '주택임대차보호법이 적용되는 주택은 <b>월세가 2기 이상 연체시</b> 명도소송 가능',
    },
    {
      icon: '🏢',
      title: '기타',
      desc: '일반 건물, 토지 등',
    },
  ],
  PROCEDURE: {
    CONSULTATION: {
      title: '상담 및 수임 의뢰',
      desc: '카카오톡을 통해 상담 후 소송 진행이 가능한 경우 수임 계약을 맺습니다.',
      link: '카톡 상담신청',
      procedureList: [
        {
          title: '카카오톡 상담',
          subtitle: '',
          gradation: false,
        },
        {
          title: '소송 진행 방법 제시',
          subtitle: '',
          gradation: true,
        },
        {
          title: '수임료 결제, 위임장/계약서 전자서명',
          subtitle: '',
          gradation: false,
        },
      ],
    },
    PROHIBITE_TRANSFER_OWNERSHIP: {
      PROHIBITION_ESTATE_TRANSFER: {
        title: '부동산점유이전금지 가처분 신청',
        desc: '임차인이 타인에게 점유 이전시키지 못하도록 법원에 신청하는 보전처분입니다. <br/>소송 진행 중에 점유자가 변경될 경우 승소하여도 강제집행이 불가능하므로 가처분이 선행되어야 합니다. ',
        procedureList: [
          {
            title: '소송 준비',
            subtitle: '질문지 작성, 계약서 등 증거자료 송부',
            gradation: false,
          },
          {
            title: '가처분 신청서 작성',
            subtitle: '',
            gradation: true,
          },
          {
            title: '가처분 신청서 최종확인 (PDF)',
            subtitle: '',
            gradation: false,
          },
          {
            title: '법원에 접수',
            subtitle: '',
            gradation: true,
          },
          {
            title: '소가 계산, 결제방법 전달',
            subtitle: '',
            gradation: true,
          },
          {
            title: '인지송달료 결제',
            subtitle: '법원에 직접 납부',
            gradation: false,
          },
          {
            title: '가처분 신청완료',
            subtitle: '',
            gradation: true,
          },
        ],
      },
      MORTAGE_ORDER: {
        title: '담보제공 명령',
        desc: "법원은 임대인에게 '담보를 제공하라'며 내리는 명령입니다. <br/>일반적으로 보증보험증권을 발급받아 제출합니다.",
        procedureList: [
          {
            title: '보증보험 발급 의뢰',
            subtitle: '법원의 담보제공 명령을 7일 이내에 이행해야 함',
            gradation: true,
          },
          {
            title: '보증보험비용 결제',
            subtitle: '',
            gradation: false,
          },
          {
            title: '전자서명',
            subtitle: '공인인증서 필요',
            gradation: false,
          },
        ],
      },
      SENTENCE_INJUNCTION: {
        title: '가처분 결정',
        desc: '부동산점유이전금지 가처분 신청에 대한 법원의 최종 결정입니다. <br/>통상적으로 신청 후 1개월 이내에 완료합니다.',
        procedureList: [
          {
            title: '가처분 결정 결과안내',
            subtitle: '',
            gradation: true,
          },
        ],
      },
      EXCUTE_INJUNCTION: {
        title: '가처분 집행',
        desc: '집행관이 임대차 주소지에 방문하여 결정문을 고지하고 게시합니다. 임차인이 <br/>부재일 경우 증인 2명이 필요하며, 열쇠공을 불러 강제 개문합니다.',
        procedureList: [
          {
            title: '강제집행신청서 제출',
            subtitle: '서울 지역은 법원 방문, 그 외 지역은 우편 발송',
            gradation: true,
          },
          {
            title: '집행신청비용 결제',
            subtitle: '당일 결제 필수',
            gradation: false,
          },
          {
            title: '집행관 방문',
            subtitle: '',
            gradation: false,
          },
        ],
      },
    },
    DETINUE: {
      LODGING_COMPLAINT: {
        title: '명도소송 소장제출',
        desc: '소송은 법원에 소장을 제출함으로써 제기합니다. 소장에 기재된 내용은 법적 절차의 과정에서 매우 중요하므로 정확하고 신중하게 작성하여야 합니다.',
        procedureList: [
          {
            title: '소송 준비',
            subtitle: '질문지 작성, 계약서 등 증거자료 송부',
            gradation: false,
          },
          {
            title: '소장 작성',
            subtitle: '',
            gradation: true,
          },
          {
            title: '소장 최종확인 (PDF)',
            subtitle: '',
            gradation: false,
          },
          {
            title: '법원에 접수',
            subtitle: '',
            gradation: true,
          },
          {
            title: '소가 계산, 결제방법 전달',
            subtitle: '',
            gradation: true,
          },
          {
            title: '인지송달료 결제',
            subtitle: '법원에 직접 납부',
            gradation: false,
          },
          {
            title: '소장 신청완료',
            subtitle: '',
            gradation: true,
          },
        ],
      },
      SERVE_TO_DEFENDANT: {
        title: '피고에게 송달',
        desc: '법원에서 우편으로 피고에게 소장을 송달합니다. 피고에게 송달되지 않는 경우 재판이 진행되지 않기 때문에 송달 문제를 해결하여야 합니다. ',
        condition: '피고가 송달 받지 않는 경우',
        procedureList: [
          {
            title: '주소보정서 제출',
            subtitle: '송달 가능한 주소로 보정',
            gradation: true,
          },
          {
            title: '특별송달신청서 제출',
            subtitle: '우편집배원이 아닌 법원의 집행관이 송달 (주말/야간/휴일)',
            gradation: true,
          },
          {
            title: '공시송달신청서 제출',
            subtitle: '최후의 송달 방법으로 법원게시판, 관보/공보, 신문에 공시',
            gradation: true,
          },
        ],
      },
      CHECK_DEFENDANT_ANSWER: {
        title: '피고의 답변서 확인',
        desc: '피고는 30일 이내에 답변서를 제출해야 합니다. 답변서 미제출시 자백으로 간주하여, 원고가 청구한 내용으로 판결이 선고될 수 있습니다.',
        procedureList: [
          {
            title: '피고의 답변서 확인',
            subtitle: '',
            gradation: true,
          },
          {
            title: '피고의 답변서에 대한 상담',
            subtitle: '',
            gradation: false,
          },
          {
            title: '필요시 준비서면(반박자료) 제출',
            subtitle: '',
            gradation: true,
          },
        ],
      },
      NOTICE_ARGUMENT_DATE: {
        title: '변론기일 통지',
        desc: '변론기일은 법정에 출석하여 재판을 받는 기일을 의미하며 <br/>피고의 대응에 따라 1회 또는 수회가 될 수 있습니다.',
        procedureList: [
          {
            title: '변론기일 (법원출석)',
            subtitle: '통상적으로 1,2회 출석',
            gradation: true,
          },
          {
            title: '조정기일 (법원출석)',
            subtitle: '조정절차가 발생하는 경우에 해당',
            gradation: true,
          },
          {
            title: '필요시 서면공방',
            subtitle: '피고가 반박자료를 제출한 경우에 해당',
            gradation: true,
          },
        ],
      },
      SENTENCE_JUDGEMENT: {
        title: '판결 선고',
        desc: '판결은 소송에 대한 법원의 판단입니다. 판결문을 송달받은 날로부터 패소한 당사자가 14일 이내에 항소를 하지 않으면 판결이 확정됩니다.',
        procedureList: [
          {
            title: '판결문 송달',
            subtitle: '',
            gradation: true,
          },
        ],
      },
      EXECUTE_JUDGEMENT: {
        title: '판결 집행',
        desc: '판결을 받은 후에도 피고가 부동산을 인도하지 않고 무단점유를 계속하는 경우 집행관이 방문하여 강제로 점유권을 회복합니다.',
        badgeContent: '별도 계약',
        procedureList: [
          {
            title: '강제집행신청서 제출',
            subtitle: '서울 지역은 법원 방문, 그 외 지역은 우편 발송',
            gradation: true,
          },
          {
            title: '집행신청비용 결제',
            subtitle: '당일 결제 필수',
            gradation: false,
          },
          {
            title: '집행관 방문',
            subtitle: '',
            gradation: false,
          },
          {
            title: '집행비용 확정신청',
            subtitle: '집행완료 후 집행비용 확정신청 가능',
            gradation: true,
          },
        ],
      },
    },
  },
};
export default PROCESS_CONSTANTS;
