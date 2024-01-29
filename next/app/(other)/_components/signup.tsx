"use client";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import CheckGroup from "./checkGroup";
import { Drawer } from "vaul";

//   ID    string `json:"id" gorm:"type:char(36);"`
// Email       string `json:"email"`
// Pw          string `json:"pw"`
// Nickname    string `json:"nickname"`
// BankAccount int64  `json:"bank_account"`
// Bank        string `json:"bank"`
// Address     string `json:"address"`
// Height      int    `json:"height"`
// Weight      int    `json:"weight"`
// Gender      string `json:"gender"`
// Age         int    `json:"age"`

interface dataType {
  Email: string;
  Pw: string;
  name: string;
  Nickname: string;
  BankAccount: number;
  Bank: string;
  Address: string;
  Height: number;
  Weight: number;
  Gender: string;
  Age: number;
}

const SignUp = () => {
  const [page, setPage] = useState(1);
  const [inputs, setInputs] = useState({
    Email1: "",
    Email2: "",
    Pw: "",
    name: "",
    Nickname: "",
    BankAccount: "",
    Bank: "",
    Address: "",
    Height: "",
    Weight: "",
    Gender: "",
    Age: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const nextInputs = {
      ...inputs,
      [name]: value,
    };

    setInputs(nextInputs);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <>
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <Button className="bg-[#8CC444]">회원가입</Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-white flex flex-col fixed bottom-0 left-0 right-0 max-h-[96%] rounded-t-[10px] z-50">
            <div className="mx-auto w-full max-w-md">
              {page == 1 ? (
                <>
                  <div className="flex mt-4 ml-2">
                    <Drawer.Close asChild>
                      <Button variant="ghost" size={"icon"}>
                        <ChevronLeft />
                      </Button>
                    </Drawer.Close>
                    <Drawer.Title className="text-[18px] font-medium flex items-center justify-center">
                      회원가입
                    </Drawer.Title>
                  </div>
                  <Drawer.Description className="ml-6 m-3 text-[#7D7D7D]">
                    본인 정보를 입력해주세요
                  </Drawer.Description>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setPage(2);
                    }}
                    className="px-3"
                  >
                    <div className="grid gap-8">
                      <Input
                        value={inputs.name}
                        name={"name"}
                        onChange={onChange}
                        className="border-x-0 border-t-0 border-b-[#BDE09E] border-b-2  rounded-none"
                        placeholder="이름"
                        required
                      />
                      <div className="flex items-center">
                        <Input
                          value={inputs.Email1}
                          name={"Email1"}
                          onChange={onChange}
                          className="w-52 rounded-none border-x-0 border-t-0 border-b-[#BDE09E] border-b-2 placeholder:font-semibold"
                          placeholder="이메일"
                          required
                        />
                        <span className="mx-1 text-xl">@</span>
                        <Input
                          value={inputs.Email2}
                          name={"Email2"}
                          onChange={onChange}
                          className="flex-1 rounded-none border-x-0 border-t-0 border-b-[#BDE09E] border-b-2"
                          required
                        />
                      </div>
                      <Input
                        type={"password"}
                        value={inputs.Pw}
                        name={"Pw"}
                        onChange={onChange}
                        className="rounded-none border-x-0 border-t-0 border-b-[#BDE09E] border-b-2"
                        placeholder="비밀번호"
                        required
                      />
                    </div>
                    <CheckGroup />
                    <div className="flex justify-end">
                      <Button
                        type={"submit"}
                        variant={"ghost"}
                        className="flex justify-between text-[#8CC444]"
                      >
                        다음으로 <ChevronRight />
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <div className="flex mt-4 ml-2">
                    <div>
                      <Button
                        variant="ghost"
                        size={"icon"}
                        onClick={() => {
                          setPage(1);
                        }}
                      >
                        <ChevronLeft />
                      </Button>
                    </div>
                    <Drawer.Title className="text-[18px] font-medium flex items-center justify-center">
                      회원가입
                    </Drawer.Title>
                  </div>
                  <Drawer.Description className="ml-6 m-3 text-[#7D7D7D]">
                    부가 정보를 입력해주세요
                  </Drawer.Description>
                  <form onSubmit={onSubmit} className="px-3 z-[999]">
                    <div>
                      <Input
                        value={inputs.Nickname}
                        name={"Nickname"}
                        onChange={onChange}
                        className="border-[1px] rounded-md"
                        placeholder="닉네임"
                        required
                      />
                      <div className="flex items-center mt-7 ">
                        <Input
                          value={inputs.BankAccount}
                          name={"BankAccount"}
                          onChange={onChange}
                          className="w-56 border-[1px] rounded-md placeholder:font-semibold mr-6"
                          placeholder="계좌번호"
                          required
                        />

                        <Select
                          onValueChange={(value: string) => {
                            setInputs({
                              ...inputs,
                              ["Bank"]: value,
                            });
                          }}
                          required
                        >
                          <SelectTrigger className="">
                            <SelectValue
                              placeholder="은행"
                              className="border-[1px] rounded-md flex-1"
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="국민">KB국민은행</SelectItem>
                            <SelectItem value="농협">NH농협</SelectItem>
                            <SelectItem value="카카오">카카오뱅크</SelectItem>
                            <SelectItem value="신한">신한은행</SelectItem>
                            <SelectItem value="토스">토스뱅크</SelectItem>
                            <SelectItem value="우리">우리은행</SelectItem>
                            <SelectItem value="하나">하나은행</SelectItem>
                            <SelectItem value="기업">IBK기업은행</SelectItem>
                            <SelectItem value="새마을">MG새마을금고</SelectItem>
                            <SelectItem value="부산">부산은행</SelectItem>
                            <SelectItem value="대구">대구은행</SelectItem>
                            <SelectItem value="케이">케이뱅크</SelectItem>
                            <SelectItem value="신협">신협</SelectItem>
                            <SelectItem value="광주">광주은행</SelectItem>
                            <SelectItem value="우체국">우체국</SelectItem>
                            <SelectItem value="제일">SC제일은행</SelectItem>
                            <SelectItem value="경남">경남은행</SelectItem>
                            <SelectItem value="수협">수협은행</SelectItem>
                            <SelectItem value="전북">전북은행</SelectItem>
                            <SelectItem value="저축">저축은행</SelectItem>
                            <SelectItem value="제주">제주은행</SelectItem>
                            <SelectItem value="씨티">씨티은행</SelectItem>
                            <SelectItem value="산림">산립조합</SelectItem>
                            <SelectItem value="SBI">SBI저축은행</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Input
                        value={inputs.Address}
                        name={"Address"}
                        onChange={onChange}
                        className="mt-7 border-[1px] rounded-md"
                        placeholder="주소"
                        required
                      />
                      <div className="flex space-x-6 mt-7">
                        <Input
                          value={inputs.Height}
                          name={"Height"}
                          onChange={onChange}
                          className="flex-1 border-[1px] rounded-md"
                          placeholder="키(cm)"
                          required
                        />
                        <Input
                          value={inputs.Weight}
                          name={"Weight"}
                          onChange={onChange}
                          className="flex-1 border-[1px] rounded-md"
                          placeholder="체중(kg)"
                          required
                        />
                      </div>
                      <div className="flex space-x-6 mt-6">
                        <Select
                          required
                          onValueChange={(value: string) => {
                            setInputs({
                              ...inputs,
                              ["Gender"]: value,
                            });
                          }}
                        >
                          <SelectTrigger className="">
                            <SelectValue placeholder="성별" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">남</SelectItem>
                            <SelectItem value="femal">여</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select
                          required
                          onValueChange={(value: string) => {
                            setInputs({
                              ...inputs,
                              ["Age"]: value,
                            });
                          }}
                        >
                          <SelectTrigger className="">
                            <SelectValue placeholder="연령" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10">10대</SelectItem>
                            <SelectItem value="20">20대</SelectItem>
                            <SelectItem value="30">30대</SelectItem>
                            <SelectItem value="40">40대</SelectItem>
                            <SelectItem value="50">50대</SelectItem>
                            <SelectItem value="60">60대 이상</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <Button className="flex justify-between text-[#8CC444] bg-white hover:bg-white">
                        회원가입 <ChevronRight />
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
};

export default SignUp;
