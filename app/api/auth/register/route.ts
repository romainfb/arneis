import { NextRequest, NextResponse } from "next/server";
import { registerNewClient } from "../auth.service";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { email, password } = await request.json();
    const client = (await registerNewClient({ email, password })) as any;
    return NextResponse.json({ client }, { status: 201 });
  } catch (e: any) {
    console.log(e);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
