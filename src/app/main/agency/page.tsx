import { currentUser } from '@clerk/nextjs/server'
import AgencyDetails from '@/components/forms/agency-details'
import { redirect } from 'next/navigation'
import React from 'react'
import { getAuthUserDetails, verifyAndAcceptInvitation } from '@/lib/queries'
import { Plan } from '@prisma/client'

type SearchParams = {
  plan?: Plan
  state?: string
  code?: string
}

const Page = async ({
  searchParams,
}: {
  searchParams: SearchParams
}) => {
  // Await all async operations at the start
  const [agencyId, user, params, authUser] = await Promise.all([
    verifyAndAcceptInvitation(),
    getAuthUserDetails(),
    // Convert searchParams to a promise-based operation
    Promise.resolve(searchParams),
    currentUser(),
  ])

  if (agencyId) {
    if (user?.role === 'SUBACCOUNT_GUEST' || user?.role === 'SUBACCOUNT_USER') {
      return redirect('/main/subaccount/')
    } else if (user?.role === 'AGENCY_OWNER' || user?.role === 'AGENCY_ADMIN') {
      if (params.plan) {
        return redirect(`/main/agency/${agencyId}/`)
      }
      if (params.state) {
        const statePath = params.state.split('_')[0]
        const stateAgencyId = params.state.split('_')[1]
        if (!stateAgencyId) return <div>Not authorized</div>
        return redirect(
        `/main/agency/${stateAgencyId}/${statePath}?code=${searchParams.code}`
        )

      } else return redirect(`/main/agency/${agencyId}/team`)
    } else {
      return <div>Not authorized</div>
    }
  }

  return (
    <div className="flex justify-center items-center mt-4">
      <div className="max-w-[850px] border-[1px] p-4 rounded-xl">
        <h1 className="text-4xl"> Create An Agency</h1>
        <AgencyDetails
          data={{ companyEmail: authUser?.emailAddresses[0].emailAddress }}
        />
      </div>
    </div>
  )
}

export default Page

