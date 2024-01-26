import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Checkbox, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { ValidateuserId, ValidateuserPsw } from '@/utils/rules'
import { LoginAPI } from '@/request/api'
// import { encrypt, decrypt } from '@/utils/jsencrypt'
import styles from './index.module.less'
import './animantion.css'
const arr = new Array(10).fill(1) // 流星

const Login = () => {
  const history = useNavigate()
  const [checked, setChecked] = useState<boolean>(false)
  const [form] = Form.useForm()

  useEffect(() => {
    const username = localStorage.getItem('username')
    const password = localStorage.getItem('password')
    if (username) {
      form.setFieldsValue({
        username: username
      })
      if (password) {
        form.setFieldsValue({
          password: password
        })
      }
      setChecked(true)
    }
  }, [form])

  const toLogin = () => {
    form.validateFields().then(values => {
      console.log(values)
      const obj = {
        username: values.username,
        password: values.password,
        type: 0
      }
      LoginAPI(obj)
        .then((res: any) => {
          if (res?.code === 200) {
            localStorage.setItem('token', res?.data?.token)
            if (checked) {
              localStorage.setItem('username', values.username)
              localStorage.setItem('password', values.password)
            } else {
              localStorage.removeItem('username')
              localStorage.removeItem('password')
            }
            message.success('登录成功')
            history('/home')
          } else {
            message.error(res?.msg)
          }
        })
        .catch(() => {
          // console.log(err);
        })
    })
  }

  const onChange = (e: any) => {
    setChecked(e.target.checked)
  }

  return (
    <>
      <div className={styles.loginContainer}>
        {arr.map((o, index) => {
          return <span className="spanCss" key={index}></span>
        })}
        <div className={styles.contentBox}>
          <div className={styles.loginBox}>
            <div className={styles.loginTitle}>
              <div className={styles.login}>
                <span>登录</span>
              </div>
              <div className={styles.welcome}>
                <span>欢迎进入后台管理系统</span>
              </div>
            </div>
            <div className={styles.formBox}>
              <Form form={form} name="login_form" layout="vertical">
                <span className={styles.span}>账号</span>
                <Form.Item
                  name="username"
                  rules={ValidateuserId()}
                  hasFeedback
                >
                  <Input
                    className={styles.loginInput}
                    prefix={<UserOutlined />}
                    placeholder="随便输入符合规则就行"
                    autoComplete="off"
                  />
                </Form.Item>
                <span className={styles.span}>密码</span>
                <Form.Item
                  name="password"
                  rules={ValidateuserPsw()}
                  hasFeedback
                >
                  <Input.Password
                    className={styles.loginInput}
                    prefix={<LockOutlined />}
                    placeholder="随便输入符合规则就行"
                    autoComplete="off"
                    onPressEnter={toLogin}
                  />
                </Form.Item>
              </Form>
              <Checkbox checked={checked} onChange={onChange}>
                <span className={styles.remember}>记住密码</span>
              </Checkbox>
              <div className={styles.loginBtn} onClick={toLogin}>
                登 录
              </div>
            </div>
            <div className={styles.tip}>忘记密码请联系管理人员</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login