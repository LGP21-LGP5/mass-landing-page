import { useStaticQuery, graphql } from 'gatsby'

export default () => {
    const { allCompanyMembersCsv } = useStaticQuery(graphql`
        query {
            allCompanyMembersCsv(filter: {Department: {eq: "Services"}, Added_Role: {ne: "CBO"}}) {
                nodes {
                    Name
                }
            }
        }
    `)

    return allCompanyMembersCsv.nodes
}
