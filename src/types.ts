export type TThemes = 'dawn' | 'day' | 'sunset' | 'night' | number;

export type TWeatherData = { // Я решил, что будет проще (Для меня) в лоб типизировать состояние с данными
  weather: {
    temp: number,
    description: string,
    weatherId: number,
    pressure: number,
    humidity: number,
    name: string,

    wind: {
      deg: number,
      speed: number,
    },
  }
}