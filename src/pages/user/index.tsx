import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CircleAlert, Edit } from 'lucide-react';
import React from 'react';

const UserPage = () => {
    return (
        <div className=" w-full max-w-screen-md py-16">
            <h1 className="text-2xl font-bold mb-6">Profil</h1>
            <div className="flex gap-7 items-start">
                <div className="relative w-24 h-24">
                    <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
                    </div>
                    <Button size={'icon'} className='rounded-full absolute bottom-0 right-0'>
                        <Edit className="  text-background" />
                    </Button>
                </div>
                <div className="rounded-lg bg-card m-0 shadow-sm p-6 flex-1">
                    <h2 className="text-2xl font-semibold mb-4">Informasi pribadi</h2>
                    <div className="space-y-8">
                        <div className='flex w-full justify-between'>
                            <div className="flex items-center justify-between w-1/2">
                                <div>
                                    <p className="text-sm text-gray-600">Nama panggilan</p>
                                    <p>moh***@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex justify-end w-1/2">
                                <Badge className='rounded-full'>Perubahan</Badge>
                            </div>
                        </div>
                        <div className='flex w-full justify-between'>
                            <div className="flex items-center justify-between w-1/2">
                                <div>
                                    <p className="text-sm text-gray-600">ID Pengguna</p>
                                    <p>616893642493719843</p>
                                </div>
                            </div>
                            <div className="flex justify-end w-1/2">
                                <Badge className='rounded-full'>Salin</Badge>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-2xl my-10 font-semibold mb-4">Informasi Verfikasi</h2>
                    <div className="space-y-8">
                        <div className='flex w-full justify-between'>
                            <div className="flex items-center justify-between w-1/2">
                                <div>
                                    <p className="text-sm text-gray-600">Verifikasi identitas</p>
                                    <div className='flex gap-1'>
                                        <CircleAlert/>
                                        <p>Belum terverifikasi</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end w-1/2">
                                <Badge className='rounded-full'>Verifikasi Sekarang</Badge>
                            </div>
                        </div>
                        <div className='flex w-full justify-between'>
                            <div className="flex items-center justify-between w-1/2">
                                <div>
                                    <p className="text-sm text-gray-600">Negara/Wilayah</p>
                                    <p>Indonesia</p>
                                </div>
                            </div>
                            <div className="flex justify-end w-1/2">
                                <Badge className='rounded-full'>Lihat Detail</Badge>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-2xl my-10 font-semibold mb-4">Detail akun</h2>
                    <div className="space-y-8">
                        <div className='flex w-full justify-between'>
                            <div className="flex items-center justify-between w-1/2">
                                <div>
                                    <p className="text-sm text-gray-600">Email</p>
                                    <p>moh***@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex justify-end w-1/2">
                                <Badge className='rounded-full'>Perubahan</Badge>
                            </div>
                        </div>
                        <div className='flex w-full justify-between'>
                            <div className="flex items-center justify-between w-1/2">
                                <div>
                                    <p className="text-sm text-gray-600">Telepon</p>
                                    <p>****586</p>
                                </div>
                            </div>
                            <div className="flex justify-end w-1/2">
                                <Badge className='rounded-full'>Perubahan</Badge>
                            </div>
                        </div>
                        <div className='flex w-full justify-between'>
                            <div className="flex items-center justify-between w-1/2">
                                <div>
                                    <p className="text-sm text-gray-600">Akun terhubung</p>
                                    <p>****586</p>
                                </div>
                            </div>
                            <div className="flex justify-end w-1/2">
                                <Badge className='rounded-full'>Kelola</Badge>
                            </div>
                        </div>
                        <div className='flex w-full justify-between'>
                            <div className="flex items-center justify-between w-1/2">
                                <div>
                                    <p className="text-sm text-gray-600">Tingkatan biaya trading</p>
                                    <p>Level 1</p>
                                </div>
                            </div>
                            <div className="flex justify-end w-1/2">
                                <Badge className='rounded-full'>Lihat Detail</Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPage;