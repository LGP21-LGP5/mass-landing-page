import { useStaticQuery, graphql } from 'gatsby'

export default () => {
    const { allCompanyMembersCsv } = useStaticQuery(graphql`
        query {
            allCompanyMembersCsv(filter: {Department: {eq: "Operations"}, Added_Role: {ne: "CTO"}}) {
                nodes {
                    Name
                }
            }
        }
    `)

    return allCompanyMembersCsv.nodes
}
