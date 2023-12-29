export interface CreateUserDto {
    name: string;
    email: string;
    phone: string;
    position_id: string | number;
    photo: File;
}
