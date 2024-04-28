import { Button, Display, Image, Input, Text, makeStyles, tokens } from '@fluentui/react-components'
import { invoke } from '@tauri-apps/api/tauri'
import { useState } from 'react'

const useStyles = makeStyles({
    flex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    block: {
        display: 'block',
        marginRight: 'auto',
        marginLeft: 'auto',
        textAlign: 'center',
    },
    icontainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    icon: {
        marginTop: tokens.spacingHorizontalXXXL,
        marginRight: tokens.spacingHorizontalXXXL,
        marginBottom: tokens.spacingHorizontalXXXL,
        marginLeft: tokens.spacingHorizontalXXXL,
        width: '32%',
    },
    greeter: {
        marginTop: tokens.spacingHorizontalL,
        marginBottom: tokens.spacingHorizontalL,
        display: 'flex',
        alignItems: 'flex-end',
    },
})

function App() {
    const [greetMsg, setGreetMsg] = useState('')
    const [name, setName] = useState('')

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        setGreetMsg(await invoke('greet', { name }))
    }

    const classes = useStyles()
    return (
        <div className={classes.flex}>
            <div className={classes.block}>
                <Display className={classes.block}>Welcome to Tauri!</Display>

                <div className={classes.icontainer}>
                    <Image className={classes.icon} src="/vite.svg" />
                    <Image className={classes.icon} src="/tauri.svg" />
                </div>

                <div className={classes.greeter}>
                    <Input
                        onChange={(e) => setName(e.currentTarget.value)}
                        placeholder="Enter a name..."
                        style={{ flexGrow: 1 }}
                    />
                    <Button
                        onClick={(e) => {
                            e.preventDefault()
                            greet()
                        }}
                    >
                        Greet
                    </Button>
                </div>

                <Text as="p" className={classes.block}>
                    {greetMsg}
                </Text>
            </div>
        </div>
    )
}

export default App
