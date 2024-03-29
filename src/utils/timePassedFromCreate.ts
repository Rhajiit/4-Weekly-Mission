/**
 * @description LinkCard에 포함된 createdTime을 웹 페이지 카드 형식에 맞게 변환한 문자열을 반환해주는 함수입니다.
 * @param { Date }time 문자열을 Date형식으로 변환한 값입니다.
 * @returns
 */
const timePassedFromCreate = (time: Date) => {
  const currentTime = new Date().getTime();
  if (!time) {
    throw new Error("시간 정보를 제대로 불러오지 못했습니다.");
  }

  const createdTime = time.getTime();
  const timeDiffMin = Math.floor((currentTime - createdTime) / 1000 / 60); // 분단위
  if (timeDiffMin < 2) return "1 minute ago";
  if (timeDiffMin < 60) return `${timeDiffMin} minutes ago`;

  const timeDiffHr = Math.floor(timeDiffMin / 60); // 시
  if (timeDiffHr === 1) return "1 hour ago";
  if (timeDiffHr < 24) return `${timeDiffHr} hours ago`;

  const timeDiffDay = Math.floor(timeDiffHr / 24); // 일
  if (timeDiffDay === 1) return "1 day ago";
  if (timeDiffDay < 31) return `${timeDiffDay} days ago`;
  if (timeDiffDay === 31) return "1 month ago";

  const timeDiffMonth = Math.floor(timeDiffDay / 30); // 월
  if (timeDiffMonth < 12) return `${timeDiffMonth} months ago`;

  const timeDiffYr = Math.floor(timeDiffMonth / 12);
  if (timeDiffYr === 1) return `1 year ago`;
  return `${timeDiffYr} years ago`;
};

export default timePassedFromCreate;
