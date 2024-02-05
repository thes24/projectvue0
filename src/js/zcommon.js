import zaxios from './zaxios';

const logout = () => {
    zaxios.post('/api/member/logout')
    .then((res) => {
        console.log('success', res);
        return res.data;
    })
    .then((data) => {
        console.log('data', data);
        window.location.reload();
    })
    .catch((err) => {
        console.error('err', err);
    });
}

function loginCheck() {
    return zaxios.get('/api/member/check-login')
    .then((res) => {
        return res.data;
    })
    .then((data) => {
        if (data.memberId !== -1) {
            var navlog = document.getElementById('login-btn');
            navlog.textContent = 'LogOut';
            navlog.addEventListener('click', logout);
            navlog.removeAttribute('href');

            var navsign = document.getElementById('signup-btn');
            navsign.textContent = data.memberName;
            navsign.href = '/mypage';
        }
    })
    .catch((err) => {
        alert('예상치 못한 에러가 발생했습니다. 조금 뒤 다시 시도해 보시고, 계속 이 오류가 발생한다면, 안타까운겁니다.');
    }
);
}

function loginRedirect() {
    return zaxios.get('/api/member/check-login')
    .then((res) => {
        return res.data;
    })
    .then((data) => {
        if (data.memberId !== -1) {
            console.log('data', data);
            window.location.href = '/';
        }
    })
}

function getMemberName() {
    return zaxios.get('/api/member/check-login')
    .then((res) => {
        return res.data;
    })
    .then((data) => {
        if (data.memberId !== -1) {
            console.log('data', data);
            return data.memberName;
        }
    })
    .catch((err) => {
        console.error('Error fetching memberEmail:', err);
    });
}

function getMemberId() {
    return zaxios.get('/api/member/check-login')
    .then((res) => {
        return res.data;
    })
    .then((data) => {
        if (data.memberId !== -1) {
            console.log('data', data);
            return data.memberId;
        }
    })
    .catch((err) => {
        console.error('Error fetching memberId:', err);
    });
}

function getMemberEmail() {
    return zaxios.get('/api/member/check-login')
    .then((res) => {
        return res.data;
    })
    .then((data) => {
        if (data.memberId !== -1) {
            console.log('data', data);
            return data.memberEmail;
        }
    })
    .catch((err) => {
        console.error('Error fetching memberId:', err);
    });
}

export default {
    loginCheck,
    loginRedirect,
    getMemberId,
    getMemberEmail,
    getMemberName,
}