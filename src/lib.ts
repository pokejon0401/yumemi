export const categories = {
  nightmare: { name: '悪夢・怖い夢', lead: '怖い夢に悩んだ朝、原因と対処法を知る' },
  sleep: { name: '睡眠を整える', lead: '今夜からできる、心地よい眠りの習慣' },
  women: { name: '女性の眠り', lead: '生理・妊娠・更年期と睡眠の変化' },
  dream: { name: '夢占い辞典', lead: '夢のモチーフから心の声を読み解く' },
  morning: { name: '明日の準備', lead: '天気と体調に合わせて朝を軽やかに' }
} as const;

export type CategoryKey = keyof typeof categories;
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const href = (path = '/') => `${base}${path}`;
