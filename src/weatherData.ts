import axios from "axios";
interface IWeatherDataFuncProps{
    cityProp: string,
}
export function weatherDataFunc (cityProp : string) {
    type MyReadonlyDeep<T> = {
        readonly [N in keyof /*берёт ключи из объектов*/ T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N]
    }

    const city = cityProp;
    const apiKey = '732c6245e247b301465571f1ef86fcab';
    const weatherDataApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=eng&units=metric&appid=${apiKey}`;

    const retData = axios.get(weatherDataApi).then((res) => {
        type TWeatherData = typeof res;
        const typedWeatherData: MyReadonlyDeep<TWeatherData> = res;
        
        console.log(typedWeatherData);
    });
    
    return retData;
}
