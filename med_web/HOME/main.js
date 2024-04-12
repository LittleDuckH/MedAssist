/*
 * @Author: huang
 * @Date: 2024-04-11 16:22:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-11 16:24:39
 * @FilePath: \MedAssist\med_web\HOME\main.js
 */
document.addEventListener('DOMContentLoaded', function () {
    const enButton = document.getElementById("button");
    
    function redirectToWeb() {
        window.location.href = "http://localhost:8501";
    }
    enButton.addEventListener("click", redirectToWeb);
});