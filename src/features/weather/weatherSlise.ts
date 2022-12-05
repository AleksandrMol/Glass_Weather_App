import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';
import { TWeatherData } from '../../types';

export const fetchWeatherGeter = createAsyncThunk(
    'weather/fetchWeatherGeter',
    async(api: string) => {
        const response: TWeatherData = await axios.get(api).then((res) => { //получаю данные с сервера, и тут же их упорядочиваю, как мне удобно.
            return {
                weather: {
                    temp: res.data.main.temp,
                    description: res.data.weather[0].description,
                    weatherId: res.data.weather[0].id,
                    pressure: res.data.main.pressure,
                    humidity: res.data.main.humidity,
                    name:res.data.name,
            
                    wind: {
                        deg: res.data.wind.deg,
                        speed: res.data.wind.speed,
                    },
                }
            }
        });
        return response;
    }
);

const weatherAdapter = createEntityAdapter();

const initialState: TWeatherData = { // начальное состояние
    weather: {
        temp: 0,
        description: 'Loading',
        weatherId: 0,
        pressure: 0,
        humidity: 0,
        name:'NaN',
    
        wind: {
            deg: 0,
            speed: 0,
        },
    }
}

export const counterSlice = createSlice({
    name: 'weatherState',
    initialState: weatherAdapter.getInitialState(initialState),
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchWeatherGeter.pending, (state) => { //процесс загрузки
            state.weather = {
                temp: 0,
                description: 'Loading',
                weatherId: 0,
                pressure: 0,
                humidity: 0,
                name:'NaN',
            
                wind: {
                    deg: 0,
                    speed: 0,
                },
            }
        })
        .addCase(fetchWeatherGeter.fulfilled, (state, action) => { // если загрузка успешна, обновляю состояние 
            state.weather = {
                temp: action.payload.weather.temp,
                description: action.payload.weather.description,
                weatherId: action.payload.weather.weatherId,
                pressure: action.payload.weather.pressure,
                humidity: action.payload.weather.humidity,
                name:action.payload.weather.name,
        
                wind: {
                    deg: action.payload.weather.wind.deg,
                    speed: action.payload.weather.wind.speed,
                },
            }
        })
        .addCase(fetchWeatherGeter.rejected, (state) => { // если ошибка
            state.weather = {
                temp: 0,
                description: "Error! You may have mistyped the name of the location",
                weatherId: 404,
                pressure: 0,
                humidity: 0,
                name:'Error 404',
    
                wind: {
                    deg: 0,
                    speed: 0,
                },
            }
        });
    },
});

export const selectWeather = (state: RootState) => state.weather;

export default counterSlice.reducer