export * from './authenticate.service';
import { AuthenticateService } from './authenticate.service';
export * from './posts.service';
import { PostsService } from './posts.service';
export * from './users.service';
import { UsersService } from './users.service';
export * from './weatherForecast.service';
import { WeatherForecastService } from './weatherForecast.service';
export const APIS = [AuthenticateService, PostsService, UsersService, WeatherForecastService];
