import React from 'react'

function Footer() {
    return (
        <footer id="footer">
            <div className="footer__inner">
                <div>
                    <h3>email</h3>
                    <a href="mailto:kkk5993@naver.com">kkk5993@naver.com</a>
                </div>

                <div>
                    <h3>kakao</h3>
                    <a href="/">kkk5993</a>
                </div>
                
                <div>
                    <h3>social</h3>
                    <ul>
                        <li><a href="/">youtube</a></li>
                        <li><a href="/">instargram</a></li>
                        <li><a href="/">github</a></li>
                        <li><a href="/">blog</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer