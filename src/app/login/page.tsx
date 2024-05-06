"use client"

import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useQueryClient } from "@tanstack/react-query"

import { Button } from "../../components/common/button/Button"
import { Input } from "../../components/common/input"
import { usePublicServicePostApiV1PublicsUserLogin } from "../../services/generated/queries"
import { OpenAPI } from "../../services/generated/requests"
// import { updateAbility } from '../../components/layouts/permissionWrapper';
// import { Button, Input, toast } from '@raralabs/components';
// import { useQueryClient } from '@tanstack/react-query';

// import { updateAbility } from '@/components/permissionWrapper';
// import { useAbilityContext } from '@/components/permissionWrapper/permissionContext';
// import { routeWithPermission } from '@/components/permissionWrapper/permissions';
// import { asyncToast } from '@/components/toast/asyncToast';
// import { axiosAgent } from '@/services/api';

const Home = () => {
  const queryClient = useQueryClient()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  })
  const router = useRouter()
  // const ability = useAbilityContext()
  const { mutateAsync } = usePublicServicePostApiV1PublicsUserLogin()

  return (
    <div className="min-h-screen flex bg-surface-background flex-col items-center justify-center ">
      <form className="flex flex-col w-[400px] bg-surface-layout p-6 rounded-md border-layout border gap-3">
        <Input label="Username" {...register("username")} />
        <Input type="password" label="Password" {...register("password")} />

        <Button
          onClick={handleSubmit(async (data) => {
            queryClient.clear()

            mutateAsync({
              data: {
                ...data,
              },
            }).then((response) => {
              OpenAPI.TOKEN = response.data.accessToken

              localStorage.setItem("token", response.data.token)
              // updateAbility(ability, response.data.features);
              router.push("/dashboard")
            })

            // await asyncToast({
            //   msgs: {
            //     loadingText: 'Logging In',
            //     successText: 'Logged In Successfully',
            //   },
            //   promise: axiosAgent.post('/api/v1/login', {
            //     ...data,
            //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
            //   }) as Promise<Record<string, { accessToken: string; features: any }>>,
            //   onSuccess: (response) => {
            //     if (response.data.accessToken) {
            //       localStorage.setItem('token', response.data.accessToken);
            //       updateAbility(ability, response.data.features);
            //       const pushRoute = routeWithPermission.filter(
            //         (e) => e.permission === response.data.features[0]
            //       );
            //       router.push(pushRoute[0].routes[0]);
            //     } else {
            //       toast({
            //         variant: 'danger',
            //         state: 'error',
            //         title: 'Username or password is wrong!',
            //       });
            //     }
            //   },
            // });
          })}
        >
          Login
        </Button>
      </form>
    </div>
  )
}
export default Home
