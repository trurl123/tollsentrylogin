// Автоматический клик на кнопку Login
function clickLoginButton() {
    // Поиск кнопки Login разными селекторами
    const selectors = [
        'button:contains("Login")',
        'input[type="submit"][value="Login"]',
        'a:contains("Login")',
        '.login-button',
        '#login-button'
    ];
    
    // Простой вариант - ищем кнопку с текстом Login
    const buttons = document.querySelectorAll('button, input[type="submit"], a');
    for (let btn of buttons) {
        if (btn.textContent.trim() === 'Login') {
            btn.click();
            console.log('Кнопка Login нажата автоматически');
            return true;
        }
    }
    
    // Если не найдено, ищем частые ID/классы
    const loginBtn = document.querySelector('#login, .login, [data-action="login"]');
    if (loginBtn) {
        loginBtn.click();
        console.log('Кнопка Login нажата автоматически');
        return true;
    }
    
    console.log('Кнопка Login не найдена на странице');
    return false;
}

// Ждем загрузки страницы
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', clickLoginButton);
} else {
    clickLoginButton();
}