import { AppProps } from "next/app";
import { useState } from "react";

export default function StampPage() {
    return (
        <div className="bg-slate-100">
            <h2>스탬프 페이지</h2>
            <Year year={2022} />
        </div>
    );
}

function Year(params: any) {
    let { year } = params;
    let arr = [];

    for (let i = 1; i < 13; i++) {
        let day = 0;

        switch (i) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                day = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                day = 30;
                break;
            case 2:
                if (year % 4 == 0) {
                    day = 29;
                } else {
                    day = 28;
                }
                break;
            default:
                break;
        }

        arr.push({
            year: year,
            month: i,
            day: day
        });
    }

    console.log(arr);

    return (
        <div>
            <h4>{year}년도</h4>
            <div className="flex">
                {arr.map((item) => {
                    return <Month year={item.year} month={item.month} day={item.day} />;
                })}
            </div>
        </div>
    );
}

function Month(params: any) {
    let { year, month, day } = params;

    return (
        <div className="">
            <h4>{month}월</h4>
            <div className="inline-flex flex-col">
                <Day year={year} month={month} day={day} />
            </div>
        </div>
    );
}

function Day(params: any) {
    let { year, month, day } = params;
    let arr = [];


    // 어차피 day 정보는 컬러나 내용들이랑 같이 db에서 가져와야 하므로
    for (let i = 1; i < day + 1; i++) {
        arr.push({
            year: year,
            month: month,
            day: i
        });
    }

    return (
        <>
            {arr.map((item) => {
                return (
                    <>
                        <DayButton item={item} />
                    </>
                );
            })}
        </>
    );
}

function DayButton(params: any) {
    let { item } = params;

    const [active, setActive] = useState(false);

    return (
        <button
            className={`mr-3 bg-rose-100 ${active ? "bg-slate-800 text-white" : ""}`}
            onClick={() => {
                setActive(!active);
            }}
        >
            {item.month} / {item.day}
        </button>
    );
}
