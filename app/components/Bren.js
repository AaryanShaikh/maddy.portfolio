"use client"
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Typography } from 'antd'
import LoadingSkeleton from './LoadingSkeleton'

const Bren = () => {
    const [isloading, setisloading] = useState(true)

    useEffect(() => {
        setisloading(false)
    }, [])

    return (
        <div>
            {isloading ? <LoadingSkeleton /> : ""}
            {
                isloading ? "" : <>
                    <Header />
                    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "61.5px" }}>
                        <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "39px", lineHeight: "52px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "18px", textAlign: "center" }}>
                            Digital transformation with<br /> a human touch
                        </Typography.Text>
                        <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "italic", fontWeight: 350, fontSize: "16px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "18px", textAlign: "center" }}>
                            An initiative and a step in the direction of employees having direct association<br /> with Bren through their mobile phones.
                        </Typography.Text>
                        <img src="/images/Desktop/Bren/Bren_Corporation_Logo 1.png" style={{ width: "195px", height: "104px", marginTop: "68px" }} />
                        <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "22px", lineHeight: "29px", color: "#525252", letterSpacing: "0px", marginTop: "42px", textAlign: "center" }}>
                            Bren is a medium-sized manufacturing company with 501-1,000 employees. They<br /> were using a manual process to manage their HR tasks, such as employee records,<br /> payroll, and benefits administration. This was a time-consuming and error-prone<br /> process, and they realized they needed a more efficient and effective solution.
                        </Typography.Text>
                        <div style={{ height: "5px", width: "625px", borderTop: "2px solid #DDDCDC", marginTop: "91px" }}></div>
                        <div style={{ width: "837px", marginTop: "56px", display: "flex", flexDirection: "column" }}>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "0px", alignSelf: "flex-start" }}>
                                Solution
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "32px", alignSelf: "flex-start" }}>
                                We implemented an HRMS app. The app streamlined their HR processes, allowing them to<br /> automate many tasks and improve the accuracy and efficiency of their HR operations.
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 600, fontSize: "20px", lineHeight: "29px", color: "#302E2E", letterSpacing: "0px", marginTop: "24px", alignSelf: "flex-start" }}>
                                One of the key features of the app was its employee self-service portal, which allowed employees to access and update their personal information, view their pay stubs, and request time off. This eliminated the need for HR staff to manually process these requests and freed up their time for more strategic tasks.
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0px", marginTop: "24px", alignSelf: "flex-start" }}>
                                The app also included an analytics and reporting feature, which gave the company valuable insights into key HR metrics, such as employee turnover, absenteeism, and headcount. This information was used to identify trends and make data-driven decisions to improve the company's HR policies and practices.
                            </Typography.Text>
                            <div style={{ display: "flex", gap: "46px", alignItems: "center" }}>
                                <img src="/images/Desktop/Bren/people.png" style={{ width: "286px", height: "200px", marginTop: "0px" }} />
                                <img src="/images/Desktop/Bren/App collage.png" style={{ width: "600px", height: "390px", marginTop: "0px" }} />
                            </div>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "110px", alignSelf: "flex-start" }}>
                                Timeline
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "18px", alignSelf: "flex-start" }}>
                                3 months from kickoff to launch
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "102px", alignSelf: "flex-start" }}>
                                The team
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "18px", alignSelf: "flex-start" }}>
                                1 product designer, 1 PM, 3 software engineers (Android, backend), 1 hardware engineer
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "32px", alignSelf: "flex-start" }}>
                                As the sole product designer, I'm responsible for all aspects of the user experience on Android<br /> (visual, interaction, research, prototyping, testing)
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "102px", alignSelf: "flex-start" }}>
                                Process
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "32px", alignSelf: "flex-start" }}>
                                “Why do people need HRMS?”
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "18px", alignSelf: "flex-start" }}>
                                <span style={{ color: "#000" }}>From an employee perspective</span>, HRMS provides a convenient and accessible platform for them<br /> to manage their personal information, benefits, and pay stubs. They can easily update their<br /> personal information, request time off, and track their<br /> performance, which increases their overall satisfaction and engagement with the organization.
                            </Typography.Text>
                            <div style={{ display: "flex", gap: "46px", justifyContent: "center" }}>
                                <img src="/images/Desktop/Bren/Process.png" style={{ width: "410px", height: "421px", marginTop: "68px" }} />
                            </div>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "42px", alignSelf: "flex-start" }}>
                                I synthesized the learnings into six main reasons. I planned to address these problems<br /> through the UX:
                            </Typography.Text>
                            <Typography.Paragraph style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "42px", alignSelf: "flex-start" }}>
                                <ol>
                                    <li><span style={{ color: "#000" }}>Time-consuming HR processes:</span> Automating and streamlining HR processes, reducing<br /> the amount of time employees spend on administrative tasks, thus making them<br /> more efficient and less time-consuming.</li>
                                    <li><span style={{ color: "#000" }}>Lack of transparency: </span> Improving transparency with real-time access to information<br /> such as pay stubs, benefit plans, and company policies, improving transparency.</li>
                                    <li><span style={{ color: "#000" }}>Inaccurate data: </span> Increasing data accuracy through elimination of manual data entry.</li>
                                    <li><span style={{ color: "#000" }}>Unorganized and difficult-to-find information: </span> Centralizing all HR-related information for easy access.</li>
                                    <li><span style={{ color: "#000" }}> Inefficient communication: </span>  Providing a platform for efficient communication.</li>
                                    <li><span style={{ color: "#000" }}> Limited self-service options: </span>Empowering employees with self-service options.</li>
                                </ol>
                            </Typography.Paragraph>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "102px", alignSelf: "flex-start" }}>
                                UX Principles
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "32px", alignSelf: "flex-start" }}>
                                My initial research led me to define some UX principles going forward:
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "18px", alignSelf: "flex-start" }}>
                                <span style={{ color: "#000" }}>Clarity over speed.</span> Optimize for folks for whom connected devices might be new and<br /> confusing. It's low cost to over-explain to the tech-savvy, and important to establish confidence in an area like real estate.<br />
                                <span style={{ color: "#000" }}>Show what matters.</span> Real estate is a messy field. Our UI shouldn't reflect this. Show only what's<br /> relevant to the situation at hand. Use progressive UI where possible.
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "102px", alignSelf: "flex-start" }}>
                                Interaction details
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "102px", alignSelf: "flex-start" }}>
                                Home view
                            </Typography.Text>
                            <Typography.Paragraph style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "42px", alignSelf: "flex-start", marginLeft: "30px" }}>
                                The default landing screen, Home view follows the <span style={{ color: "#000" }}>"show what matters"</span> principle by focusing<br /> on what's important - just the things for "Today", with the minimum required information.<br />
                                The home view provides employees with quick access to important information, including the<br /> ability to clock in and out for the day, a list of top announcements from management, an<br /> overview of which colleagues are out, and a list of employees celebrating work anniversaries or birthdays.
                            </Typography.Paragraph>
                            <div style={{ display: "flex", gap: "48px", justifyContent: "center", marginTop: "62px", }}>
                                <img src="/images/Desktop/Bren/Home view -1.png" style={{ width: "265px", height: "471px" }} />
                                <img src="/images/Desktop/Bren/Home view -2.png" style={{ width: "265px", height: "471px" }} />
                            </div>

                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "102px", alignSelf: "flex-start" }}>
                                Clock In view
                            </Typography.Text>
                            <Typography.Paragraph style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "42px", alignSelf: "flex-start", marginLeft: "30px" }}>
                                The clock-in view is simple and user-friendly, allowing employees to quickly clock in for the day<br /> with just their selfie and location. Unlike other players in the industry, there's no need to enter<br /> any longitude or latitude information, making the process fast and hassle-free.
                            </Typography.Paragraph>
                            <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "62px", }}>
                                <img src="/images/Desktop/Bren/Clock In view -1.png" style={{ width: "265px", height: "471px" }} />
                                <img src="/images/Desktop/Bren/Clock In view -2.png" style={{ width: "265px", height: "471px" }} />
                                <img src="/images/Desktop/Bren/Clock In view -3.png" style={{ width: "265px", height: "471px" }} />
                            </div>

                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "102px", alignSelf: "flex-start" }}>
                                Attendance view
                            </Typography.Text>
                            <Typography.Paragraph style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "42px", alignSelf: "flex-start", marginLeft: "30px" }}>
                                We again follow the principle of <span style={{ color: "#000" }}>progressive UI</span>. The attendance view provides an overview of<br /> an employee's attendance for a selected month. If there are any discrepancies, clear CTA's are<br /> provided to resolve them. By selecting a CTA, additional fields will appear, with known defaults<br /> pre-populated for the user to confirm.
                            </Typography.Paragraph>
                            <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "62px", }}>
                                <img src="/images/Desktop/Bren/Attendance view -1.png" style={{ width: "265px", height: "471px" }} />
                                <img src="/images/Desktop/Bren/Attendance view -2.png" style={{ width: "265px", height: "471px" }} />
                                <img src="/images/Desktop/Bren/Attendance view -3.png" style={{ width: "265px", height: "471px" }} />
                            </div>

                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "102px", alignSelf: "flex-start" }}>
                                Leave Tracker view
                            </Typography.Text>
                            <Typography.Paragraph style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "42px", alignSelf: "flex-start", marginLeft: "30px" }}>
                                The leave tracker view serves as an easy-to-use platform for employees to monitor and<br /> manage their leaves, displaying information such as the number of leave days taken and<br /> remaining, as well as a record of past leave applications. Additionally, it provides a direct call-<br />to-action for employees to apply for new leave requests. Again, only relevant information is<br /> asked for per-page, with brief descriptions guiding the user through the flow.
                            </Typography.Paragraph>
                            <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "62px", }}>
                                <img src="/images/Desktop/Bren/Leave Tracker view -1.png" style={{ width: "265px", height: "471px" }} />
                                <img src="/images/Desktop/Bren/Leave Tracker view -2.png" style={{ width: "265px", height: "471px" }} />
                                <img src="/images/Desktop/Bren/Leave Tracker view -3.png" style={{ width: "265px", height: "471px" }} />
                            </div>

                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "102px", alignSelf: "flex-start" }}>
                                Incentive view
                            </Typography.Text>
                            <Typography.Paragraph style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "42px", alignSelf: "flex-start", marginLeft: "30px" }}>
                                The incentives view is a way for employees to see how much money they will earn as a bonus for their work. The information shown is kept simple and only includes what is necessary, like the amount they will earn for the current period and their total earnings so far. This information can help motivate the employee, but if the bonus is not what they expected, it can also demotivate them. To solve this problem, the company decided to calculate the bonus on a fixed terms basis. This means that employees who directly make sales will earn more, and others who helped with the sale will earn a set amount.
                            </Typography.Paragraph>
                            <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "62px", }}>
                                <img src="/images/Desktop/Bren/Incentive view -1.png" style={{ width: "265px", height: "471px" }} />
                                <img src="/images/Desktop/Bren/Incentive view -2.png" style={{ width: "265px", height: "471px" }} />
                                <img src="/images/Desktop/Bren/Incentive view -3.png" style={{ width: "265px", height: "471px" }} />
                            </div>

                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "102px", alignSelf: "flex-start" }}>
                                More Services view
                            </Typography.Text>
                            <Typography.Paragraph style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "42px", alignSelf: "flex-start", marginLeft: "30px" }}>
                                The More Services view provides additional HR-related functions for employees, such as access to their payslips, attendance requests, and the status of those requests. It also includes an organizational chart view, access to files and HR-related documents, and an onboarding feature for new employees to help with a smooth onboarding process.
                            </Typography.Paragraph>
                            <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "62px", }}>
                                <img src="/images/Desktop/Bren/More Services view -1.png" style={{ width: "265px", height: "471px" }} />
                                <img src="/images/Desktop/Bren/More Services view -2.png" style={{ width: "265px", height: "471px" }} />
                                <img src="/images/Desktop/Bren/More Services view -3.png" style={{ width: "265px", height: "471px" }} />
                            </div>

                            <Typography.Paragraph style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 350, fontSize: "18px", lineHeight: "29px", color: "#3D3D3D", letterSpacing: "0.4px", marginTop: "110px", alignSelf: "flex-start", marginLeft: "30px" }}>
                                <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "28px", color: "#302E2E", letterSpacing: "0.4px", marginTop: "0px", alignSelf: "flex-start" }}>
                                    Outcome
                                </Typography.Text><br /><br />
                                The implementation of the HRMS app was a success, and Bren saw a significant improvement in the efficiency and accuracy of their HR operations. The app also improved employee engagement and satisfaction by providing them with easy access to their personal information and benefits. The company also benefited from the valuable insights provided by the analytics and reporting feature, which helped them make data-driven decisions to improve their HR policies and practices.
                            </Typography.Paragraph>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "231px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", height: "86px", width: "269px", background: "#FFFFFF", border: "1px solid rgba(0, 0, 0, 0.075)", boxShadow: "0px 6px 17px rgba(0, 0, 0, 0.05)", borderRadius: "8px", justifyContent: "center", padding: "0px 20px", opacity: "1", cursor: "pointer" }}>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#000000", letterSpacing: "0.4px" }}>
                                Shriram Housing Finance
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "19px", lineHeight: "28px", color: "rgba(0, 0, 0, 0.6)", letterSpacing: "0.4px" }}>
                                Previous
                            </Typography.Text>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", height: "86px", width: "269px", background: "#FFFFFF", border: "1px solid rgba(0, 0, 0, 0.075)", boxShadow: "0px 6px 17px rgba(0, 0, 0, 0.05)", borderRadius: "8px", justifyContent: "center", padding: "0px 20px", opacity: "1", cursor: "pointer" }}>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#000000", letterSpacing: "0.4px" }}>
                                Supplysail Dashboard
                            </Typography.Text>
                            <Typography.Text style={{ fontFamily: "Avenir LT Std", fontStyle: "normal", fontWeight: 400, fontSize: "19px", lineHeight: "28px", color: "rgba(0, 0, 0, 0.6)", letterSpacing: "0.4px" }}>
                                Next
                            </Typography.Text>
                        </div>
                    </div>
                    <Footer />
                </>
            }

        </div>
    )
}

export default Bren