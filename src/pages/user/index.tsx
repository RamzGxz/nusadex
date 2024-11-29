import { Edit } from 'lucide-react';
import React from 'react';

const UserPage = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            <h1 className="text-2xl font-bold mb-6">Profil</h1>

            <div className="space-y-8 flex">
                <div className="relative w-24 h-24">
                    <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
                    </div>
                    <button className="absolute bottom-0 right-0 p-1 bg-white rounded-full border shadow-sm">
                        <Edit className="w-4 h-4" />
                    </button>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm  p-6 flex-1">
                    <h2 className="text-lg font-semibold mb-4">Informasi pribadi</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">Nama panggilan</p>
                                <p>moh***@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPage;