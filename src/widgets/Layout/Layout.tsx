import { Header } from "../Header"

export const Layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return(
        <>
            <Header logotype="hakolr-blog" />
            {children}
        </>
    )
}