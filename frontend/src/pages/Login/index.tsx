import { useNavigate } from "react-router-dom"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import logo from "@/assets/logo.png"

export default function Login() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#ebf8fa] px-4">

      {/* Logo Section */}
      <div className="mb-14 flex justify-center">
        <img
          src={logo}
          alt="ZamSouq Logo"
          className="`w-70 md:w-85 object-contain"
        />
      </div>

      {/* Login Card */}
      <Card className="w-full max-w-90 rounded-2xl border border-slate-200 bg-white shadow-sm p-6" style={{ padding: '24px' }}>

        {/* Header */}
        <CardHeader className="text-center p-0 mb-6">
          <CardTitle className="text-2xl font-semibold text-slate-800">
            Sign In
          </CardTitle>
          <CardDescription className="text-slate-400 text-sm mt-1">
            Welcome back! Please sign in to your account
          </CardDescription>
        </CardHeader>

        {/* Content */}
        <CardContent className="p-0 space-y-4">

          {/* Email */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-slate-600 font-medium text-sm"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@mail.com"
              className="h-10 px-4 bg-[#f4f7f7] border border-transparent focus-visible:ring-1 focus-visible:ring-teal-500 rounded-lg placeholder:text-slate-300"
            />
          </div><br />

          {/* Password */}
          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-slate-600 font-medium text-sm"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              className="h-10 px-4 bg-[#f4f7f7] border border-transparent focus-visible:ring-1 focus-visible:ring-teal-500 rounded-lg placeholder:text-slate-300"
            />
          </div><br />

          {/* Button */}
          <Button
            className="w-full h-10 rounded-full bg-linear-to-r from-[#14b8a6] to-[#0d7a7a] hover:opacity-95 transition-opacity text-white font-semibold text-base mt-2"
            onClick={() => navigate("/dashboard")}
          >
            Sign In
          </Button>

        </CardContent>
      </Card>
    </div>
  )
}
