import { Tab, Tabs } from '@heroui/react';
import LogInForm from '../components/LogInForm';
import SignInForm from '../components/SignInForm';
import { useState } from 'react';

const Auth = () => {
    const [selectedTabItem, setSelectedTabItem] = useState('login');

    return (
        <div className="flex w-full flex-col items-center">

            <Tabs aria-label='options' selectedKey={selectedTabItem} onSelectionChange={setSelectedTabItem} variant='underlined' color='secondary'>
                <Tab key='login' title="Вход">
                    <LogInForm />
                </Tab>

                <Tab key='sigin' title='Регистрация'>
                    <SignInForm />
                </Tab>
            </Tabs>
        </div>
    );
};

export default Auth;