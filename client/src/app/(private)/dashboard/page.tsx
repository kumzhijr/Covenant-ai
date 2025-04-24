"use client";

import UserContracts from "@/components/dashboard/user-contracts";
// import { UploadModal } from "@/components/modals/upload-modal";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";

export default function Dashboard() {
    // const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {/* <Button onClick={() => setIsUploadModalOpen(true)}>Upload Contract</Button> */}
            <UserContracts />
        </div>
    );
}