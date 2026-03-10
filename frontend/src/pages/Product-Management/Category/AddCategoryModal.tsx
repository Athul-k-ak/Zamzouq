import * as React from "react";
import { X, Upload, FileText } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface AddCategoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: "parent" | "sub";
    category?: any | null;
}

export function AddCategoryModal({ isOpen, onClose, type, category }: AddCategoryModalProps) {
    const [categoryName, setCategoryName] = React.useState("");
    const [isDragging, setIsDragging] = React.useState(false);
    const [uploadedFile, setUploadedFile] = React.useState<File | null>(null);
    const [previewImage, setPreviewImage] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (category) {
            setCategoryName(category.name || "");
            setPreviewImage(category.image || null);
            setUploadedFile(null);
        } else {
            setCategoryName("");
            setUploadedFile(null);
            setPreviewImage(null);
        }
    }, [category, isOpen]);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            setUploadedFile(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setUploadedFile(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const removeFile = () => {
        setUploadedFile(null);
        setPreviewImage(null);
    };

    const isEdit = !!category;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden rounded-[24px] bg-white" showCloseButton={false}>
                <DialogHeader className="p-6 pb-0 flex flex-row items-center justify-between">
                    <DialogTitle className="text-xl font-bold text-slate-900">
                        {isEdit ? "Edit" : "Add"} {type === "parent" ? "Parent" : "Sub"} Category
                    </DialogTitle>
                    <button
                        onClick={onClose}
                        className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </DialogHeader>

                <div className="p-6 space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="category-name" className="text-sm font-bold text-slate-900">
                            Category Name *
                        </Label>
                        <Input
                            id="category-name"
                            placeholder="Enter full name"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            className="h-12 border-slate-200 rounded-xl focus-visible:ring-teal-500 font-medium"
                        />
                    </div>

                    <div className="space-y-4">
                        <Label className="text-sm font-bold text-slate-900">Category Image*</Label>
                        {!previewImage ? (
                            <div
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                className={cn(
                                    "relative border-2 border-dashed rounded-[20px] p-10 flex flex-col items-center justify-center gap-4 transition-all",
                                    isDragging ? "border-teal-500 bg-teal-50/50" : "border-slate-200 bg-slate-50/30"
                                )}
                            >
                                <input
                                    type="file"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                />
                                <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center shadow-sm">
                                    <div className="h-10 w-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                                        <Upload className="h-5 w-5" />
                                    </div>
                                </div>
                                <p className="text-sm font-medium text-slate-600">
                                    <span className="text-teal-600 font-bold">Click here</span> to upload or drop files here
                                </p>
                            </div>
                        ) : (
                            <div className="relative rounded-[20px] overflow-hidden border border-slate-200 h-48 bg-slate-50">
                                <img src={previewImage} alt="Preview" className="w-full h-full object-contain" />
                                <button
                                    onClick={removeFile}
                                    className="absolute top-2 right-2 h-8 w-8 flex items-center justify-center rounded-full bg-slate-900/50 text-white hover:bg-slate-900 transition-colors"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                        )}

                        {uploadedFile && (
                            <div className="flex items-center gap-3 p-3 bg-slate-50/80 rounded-2xl border border-slate-100">
                                <div className="h-10 w-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shadow-sm">
                                    <FileText className="h-5 w-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-xs font-bold text-slate-700 truncate">{uploadedFile.name}</p>
                                        <p className="text-[10px] font-bold text-slate-400">{(uploadedFile.size / (1024 * 1024)).toFixed(1)}MB</p>
                                    </div>
                                    <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-teal-500 w-[100%]" />
                                    </div>
                                </div>
                                <button
                                    onClick={removeFile}
                                    className="p-1 hover:bg-slate-200 rounded-md transition-colors text-slate-400"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <DialogFooter className="p-6 pt-2 flex items-center justify-between sm:justify-between gap-4">
                    <Button
                        variant="outline"
                        onClick={onClose}
                        className="flex-1 h-12 rounded-xl border-slate-200 text-slate-600 font-bold hover:bg-slate-50"
                    >
                        Cancel
                    </Button>
                    <Button
                        className="flex-1 h-12 rounded-xl bg-[#056d71] hover:bg-[#045a5d] text-white font-bold shadow-sm"
                    >
                        {isEdit ? "Update" : "Save"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
