/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString } from 'class-validator';

export class CreateSongDTO /*Data Transfer Object*/ {
  @IsString()
  title: string;
  @IsString()
  artist: string;
}
