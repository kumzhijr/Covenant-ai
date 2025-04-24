import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

export const resend = new Resend(RESEND_API_KEY);

export const sendPremiumConfirmationEmail = async (
    userEmail: string,
    userName: string
) => {
    try {
        await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: userEmail,
            subject: "Welcome to Premium",
            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Covenant-AI</title>
    <style>
        /* Base styles */
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
        }
        
        /* Email container */
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(138, 43, 226, 0.1);
        }
        
        /* Header */
        .header {
            background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
            padding: 40px 20px;
            text-align: center;
            border-bottom: 4px solid #8a2be2;
        }
        
        .logo {
            color: #ffffff;
            font-size: 28px;
            font-weight: bold;
            margin: 0;
            letter-spacing: 0.5px;
        }
        
        .logo span {
            color: #8a2be2;
            background: linear-gradient(90deg, #8a2be2, #a64dff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 800;
        }
        
        /* Content */
        .content {
            padding: 40px 30px;
            color: #333333;
        }
        
        h1 {
            color: #000000;
            margin-top: 0;
            font-size: 26px;
            line-height: 1.3;
            margin-bottom: 20px;
            border-left: 4px solid #8a2be2;
            padding-left: 15px;
        }
        
        p {
            margin-bottom: 20px;
            font-size: 16px;
            color: #444444;
            line-height: 1.7;
        }
        
        /* Button */
        .button {
            display: inline-block;
            background: linear-gradient(90deg, #8a2be2, #a64dff);
            color: #ffffff;
            text-decoration: none;
            padding: 14px 28px;
            border-radius: 6px;
            font-weight: bold;
            margin: 20px 0;
            text-align: center;
            box-shadow: 0 4px 10px rgba(138, 43, 226, 0.2);
            transition: all 0.3s ease;
        }
        
        .button:hover {
            background: linear-gradient(90deg, #7928ca, #8a2be2);
            box-shadow: 0 6px 15px rgba(138, 43, 226, 0.3);
        }
        
        /* Features */
        .features {
            margin: 35px 0;
            background-color: #f9f6ff;
            padding: 25px;
            border-radius: 10px;
        }
        
        .feature {
            display: flex;
            align-items: flex-start;
            margin-bottom: 25px;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease;
        }
        
        .feature:last-child {
            margin-bottom: 0;
        }
        
        .feature:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
        }
        
        .feature-icon {
            background: linear-gradient(135deg, #8a2be2, #a64dff);
            color: #ffffff;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 18px;
            flex-shrink: 0;
            font-weight: bold;
            box-shadow: 0 4px 10px rgba(138, 43, 226, 0.2);
        }
        
        .feature-text {
            flex: 1;
        }
        
        .feature-text h3 {
            margin: 0 0 8px 0;
            color: #000000;
            font-size: 18px;
        }
        
        .feature-text p {
            margin: 0;
            color: #666666;
            font-size: 15px;
        }
        
        /* Divider */
        .divider {
            height: 1px;
            background: linear-gradient(90deg, rgba(138, 43, 226, 0.1), rgba(138, 43, 226, 0.5), rgba(138, 43, 226, 0.1));
            margin: 30px 0;
        }
        
        /* Contact */
        .contact {
            background-color: #f9f6ff;
            padding: 20px;
            border-radius: 8px;
            margin-top: 30px;
        }
        
        .contact a {
            color: #8a2be2;
            text-decoration: none;
            font-weight: 500;
        }
        
        .contact a:hover {
            text-decoration: underline;
        }
        
        /* Footer */
        .footer {
            background: linear-gradient(135deg, #222222 0%, #333333 100%);
            color: #aaaaaa;
            padding: 30px 20px;
            text-align: center;
            font-size: 14px;
        }
        
        .footer a {
            color: #8a2be2;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .footer a:hover {
            color: #a64dff;
            text-decoration: underline;
        }
        
        .footer-links {
            margin: 15px 0;
            padding: 0;
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        
        .footer-links li {
            margin: 0;
        }
        
        .footer-links a {
            color: #8a2be2;
            text-decoration: none;
            font-weight: 500;
            padding: 5px 0;
        }
        
        .footer-links a:hover {
            color: #a64dff;
            text-decoration: underline;
        }
        
        .social-links {
            margin: 20px 0;
        }
        
        .social-links a {
            display: inline-block;
            margin: 0 10px;
            color: #ffffff;
            background-color: rgba(138, 43, 226, 0.2);
            width: 36px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            border-radius: 50%;
            text-decoration: none;
            transition: all 0.3s ease;
        }
        
        .social-links a:hover {
            background-color: #8a2be2;
            transform: translateY(-3px);
        }
        
        .copyright {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            font-size: 13px;
            color: #888888;
        }
        
        /* Responsive */
        @media only screen and (max-width: 600px) {
            .content {
                padding: 30px 20px;
            }
            
            .features {
                padding: 20px 15px;
            }
            
            .feature {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .feature-icon {
                margin-bottom: 15px;
                margin-right: 0;
            }
            
            .footer-links {
                flex-direction: column;
                gap: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <h1 class="logo">Covenant<span>-AI</span></h1>
        </div>
        
        <!-- Content -->
        <div class="content">
            <h1>Welcome to Covenant-AI Premium, ${userName}!</h1>
            <p>We're thrilled to have you on board as a Premium member. Covenant-AI is designed to help you achieve more with artificial intelligence, making complex tasks simple and intuitive.</p>
            
            <a href="#" class="button">Explore Your Dashboard</a>
            
            <div class="features">
                <div class="feature">
                    <div class="feature-icon">1</div>
                    <div class="feature-text">
                        <h3>Premium AI Tools</h3>
                        <p>Access our exclusive suite of cutting-edge AI tools designed to streamline your workflow and boost productivity across all your projects.</p>
                    </div>
                </div>
                
                <div class="feature">
                    <div class="feature-icon">2</div>
                    <div class="feature-text">
                        <h3>Advanced Dashboard</h3>
                        <p>Your premium dashboard with advanced features adapts to your needs and preferences, providing real-time insights and powerful controls.</p>
                    </div>
                </div>
                
                <div class="feature">
                    <div class="feature-icon">3</div>
                    <div class="feature-text">
                        <h3>Priority 24/7 Support</h3>
                        <p>As a premium member, you get priority access to our support team, ensuring your questions are answered and issues resolved promptly.</p>
                    </div>
                </div>
            </div>
            
            <div class="divider"></div>
            
            <p>Your premium membership unlocks the full potential of our platform. We've designed every feature with your productivity and success in mind.</p>
            
            <div class="contact">
                <p>If you have any questions, don't hesitate to reach out to our support team at <a href="mailto:support@covenant-ai.com">support@covenant-ai.com</a>.</p>
            </div>
            
            <p>Welcome aboard,<br><strong>The Covenant-AI Team</strong></p>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <ul class="footer-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Help Center</a></li>
            </ul>
            
            <p>Covenant-AI, 123 AI Boulevard, Tech City</p>
            <p class="copyright">&copy; 2025 Covenant-AI. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`,
        });
    } catch (error) {
        console.error(error);
    }
};